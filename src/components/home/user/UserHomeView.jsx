import { FaBook , FaPlusCircle,  FaPlus, FaTicketAlt, FaChartLine, FaChartBar} from 'react-icons/fa'
import { GiBookPile , GiMoneyStack, GiInfo} from 'react-icons/gi';
import {  PieChart, Pie, Cell, Bar, Tooltip, Legend, ResponsiveContainer, Line, YAxis, XAxis, CartesianGrid, LineChart, BarChart } from 'recharts';
import TabTheme from '../../theme/UI-setting/TabTheme';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios";

import Modal from 'react-modal'
import BalanceDisplay from './BalanceDisplay';
import NET_CONFIG from '../../../configs/NetworkConfig';

const protocol = NET_CONFIG.CONN_PROTOCOL;
const ip_address = NET_CONFIG.STATIC_IP;
const port_address = NET_CONFIG.PORT_ADDRESS;

Modal.setAppElement('#root')


function UserHomeView({actualBalance}) {
   const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');

   const [showBal, setShowBal] = useState(()=>{
    const storedValue = localStorage.getItem('showBal');
           return storedValue === 'true' || storedValue === null; // Default to showing balance if not set
   });

  //  const [view, setView] = useState(()=>{
  //   const  charts = Bar || Line;
  //          return charts ? Bar : Line; // Default to showing balance if not set
  //  });
   
  //  const charts = Bar || Line;
const [view, setView] = useState(localStorage.getItem('chart') === 'line' || 'bar');
  // // Load saved chart type from localStorage
  useEffect(() => {
    // const chart ? bar || line;
    localStorage.setItem("chart", view ? Bar : Line);
      setView(view);
  }, [view]);
  
     useEffect(() => { 
      localStorage.setItem('showBal', setShowBal.toString());
     }, [showBal]);

 const [chartData, setChartData] = useState([]);
  const [balanceData, setBalanceData] = useState([]);
  const [ setAccountsData] = useState([]);

    useEffect(() => { 
      document.body.classList.toggle('dark-mode', darkMode); 
      localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
     }, [darkMode]); 
  
     const [modalIsOpen, setModalIsOpen] = useState(false)
          const [totalAccModalIsOpenOpen, setTotalAccModalIsOpen] = useState(false)
          
  useEffect(() => {
    axios.get(`${protocol}://${ip_address}:${port_address}/api/chart-data`)
      .then((res) => setChartData(res.data))
      .catch((err) => console.error("Chart Data Error:", err));

    axios.get(`${protocol}://${ip_address}:${port_address}/api/balance-data`)
      .then((res) => setBalanceData(res.data))
      .catch((err) => console.error("Balance Data Error:", err));

    axios.get(`${protocol}://${ip_address}:${port_address}/api/total_tickets`)
    .then((res) => setAccountsData(res.data))
    .catch((err) => console.error("Accounts Data Error:", err));

  }, [setAccountsData]);


const [ setPieData] = useState([]);

useEffect(() => {
  axios.get(`${protocol}://${ip_address}:${port_address}/api/pie-data`)
    .then((res) => setPieData(res.data))
    .catch((err) => console.error("Pie Data Error:", err));
}, [setPieData]);


// track selected (clicked or hovered)
const [selected, setSelected] = useState(null);

// totals for pie
const totalProfit = chartData.reduce((a, b) => a + (b.P || 0), 0);
const totalLoss   = chartData.reduce((a, b) => a + (b.L || 0), 0);

// dynamic pie data
const dynamicPieData = selected
  ? [
      { name: "profit", value: selected.P },
      { name: "loss", value: selected.L },
    ]
  : [
      { name: "Total P", value: totalProfit },
      { name: "Total L", value: totalLoss },
    ];

    const formatCurrency = (value) => {
  // You can change "$" to your local currency symbol
  return `$${Number(value).toFixed(2)}`;
};



  return (
    <main className='main-container' onLoad={() => setDarkMode(!darkMode)}>
    <div className='main-title'>
        <h4 class="text-gray-500">Dashboard</h4>

          <Link onClick={() => { 
                // OpenSidebar
                setModalIsOpen(true)
                }
            } to="/pnlat/dashboard" class="btn btn-succes  mt-0 pt-0 new-account-tickets float-end"><FaPlus  size={18} /> New </Link>
    </div>

<Modal className='four-z-index MT6 ' isOpen ={modalIsOpen}
     shouldCloseOnOverlayClick={false}
    style={{
      overlay:{backgroundColor: '#5e5c5cb7', },
      content:{ overflow: 'auto'}
    }}
    onRequestClose={() => setModalIsOpen(false)}>

{/* <!-- Logout Modal--> */}
    {/* <div class="modalu fades three-z-index" id="logoutModal" tabindex="o-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
        <div class="modal-dialog container  " >
            <div class="modal-content theme-forced-color ">
                <div class="modal-header transparent ">
                    <h5 class="modal-title text-gray-800" id="exampleModalLabel">Create New <FaPlusCircle color='gray'/> </h5>
                    {/* <button onClick={() => setModalIsOpen(false)} class="close" type="button" data-dismiss="modal" aria-label="Close">
                    {/* <FaTimes className='btn-effect red' aria-hidden="true" /> */}
                    {/* <CloseButton className='btn-effect' variant='red' /> */}
                        {/* <span aria-hidden="true">X</span> */}
                    {/* </button> */} 
                </div>
                <div class="modal-body text-center">
                     {/* <FaExclamationTriangle size={75} color='orange' className='mb-0 mt-4' /> */}
                    <Link to='/pnlat/balance' className='pl-4 pr-4 text-gray-600 p-3 app-btn-def disable mt-4 mb-5 mr-3 btn-effect btn'>
                    <FaTicketAlt size={45} width={30} className='ml-3 pr-3' color='purple' /> 
                    <br /> Ticket
                    </Link>
                    <Link to='/pnlat/open book account' className=' pl-4 pr-4 app-btn-def p-3 text-gray-600 mt-4 mb-5 ml-3 btn-effect btn'>
                    <FaBook size={45} color='blue' /> 
                    <br /> Account
                    </Link>
                </div>
                <div class="modal-footer modal-footer-hidden">
                    {/* <Link class="btn btn-danger" to="/login">Logout</Link> */}
                    <button onClick={() => setModalIsOpen(false)} class="app-btn-def auto btn btn-block" type="button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    {/* </div> */}

      {/* <h2>Modal</h2>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Cls</button>
      </div> */}

    </Modal>
    <div className='main-cards'>
 
        <div className='card btn-effects shadow '>
            <div className='card-inner'>
                <h6 class="text-gray-500">Total Balance</h6>
                <GiMoneyStack className='card_icon milk-bottle'/>
            </div>
            <h3 className='mb-0'> <BalanceDisplay />{balanceData}</h3>
        </div>
        <div className='card btn-effect shadow' onClick={() => { 
                // OpenSidebar
                setTotalAccModalIsOpen(true)
                }
            }> 
            <div className='card-inner'>
                <h6 class="text-gray-500">Total Accounts</h6>
                <GiBookPile className='card_icon i-care'/>
            </div>
            <h3 class="text-gray-500">2 {setAccountsData} </h3>

            
        </div>
 
    </div>
<Modal className='four-z-index MT6 ' isOpen ={totalAccModalIsOpenOpen}
     shouldCloseOnOverlayClick={false}
    style={{
      overlay:{backgroundColor: '#5e5c5cb7', },
      content:{ overflow: 'auto'}
    }}
    onRequestClose={() => setTotalAccModalIsOpen(false)}>
<div class="modal-dialog container  " >
            <div class="modal-content theme-forced-color ">
                <div class="modal-header transparent ">
                    <h5 class="modal-title text-gray-800" id="exampleModalLabel">Account Details <GiInfo size={17} color='gray'/> </h5>
                </div>
                <div class="modal-body text-center">
                    <Link to='/pnlat/select-account' className='text-gray-600 p-3  mt-0 mb-0  btn-effect btn'>
                    <FaBook size={25} color='blue' /> 
                    <br />Total Accounts: 
                    <br />
                      <span className='text-gray-500 '>
                    2
                    {balanceData}
                    </span>
                    </Link>
                     {/* <Link to='/pnldt/balance' className='text-gray-600 p-3  mt-0 mb-0  btn-effect btn'>
                    <FaCalendarAlt size={25} color='blue' /> 
                    <br />Created: 12/06/2025 
                    <br />
                    5 days ago
                    </Link> */}
                    <br />
                    <Link to='/pnlat/select-ticket' className='text-gray-600 mt-4 mb-2 btn-effect btn'>
                    <FaTicketAlt size={25} color='purple' /> 
                    <br /> Total Tickets: 
                    <br />
                    <span className='text-gray-500 '>
                      5
                    </span>
                    </Link>
                </div>
                <div class="modal-footer modal-footer-hidden">
                    {/* <Link class="btn btn-danger" to="/login">Logout</Link> */}
                    <button onClick={() => setTotalAccModalIsOpen(false)} class="app-btn-def auto btn btn-block" type="button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>


    </Modal>
    <div className='charts mb-0 '>

      <Link
        
        className="container ml-3 float-start"
      >
        {view === "bar" ? <FaChartLine  size={25} onClick={() => setView(view === "bar" ? "line" : "bar")} className="ml-4 float-start" color='gray'/> : 
                          <FaChartBar onClick={() => setView(view === "bar" ? "line" : "bar")} className="ml-4 float-start" color='gray' size={25} />}
      </Link>

      <ResponsiveContainer width="100%" height="100%" class='mr-5'>


  {view === "bar" ? (
          <BarChart data={chartData}>
  <CartesianGrid strokeDasharray="1 1" className='glasspalete' />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar
    dataKey="P"
    fill="#82ca9d"
    onClick={(entry) => setSelected(entry)}
    onMouseEnter={(entry) => setSelected(entry)}   // hover sets
    onMouseLeave={() => setSelected(null)}         // leave resets
  />
  <Bar
    dataKey="L"
    fill="red"
    onClick={(entry) => setSelected(entry)}
    onMouseEnter={(entry) => setSelected(entry)}
    onMouseLeave={() => setSelected(null)}
  />
</BarChart>

        ) : (
          <LineChart data={chartData}>
  <CartesianGrid strokeDasharray="1 1" className='glasspalete' />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line
    type="monotone"
    dataKey="P"
    stroke="#82ca9d"
    activeDot={{
      r: 6,
      onClick: (e) => setSelected(e),
      onMouseEnter: (e) => setSelected(e),
      onMouseLeave: () => setSelected(null),
    }}
    fill="#82ca9d"
    onClick={(entry) => setSelected(entry)}
    onMouseEnter={(entry) => setSelected(entry)}   // hover sets
    onMouseLeave={() => setSelected(null)}    
  />
  <Line
    type="monotone"
    dataKey="L"
    stroke="red"
    activeDot={{
      r: 6,
      onClick: (entry) => setSelected(entry),
      onMouseEnter: (entry) => setSelected(entry),
      onMouseLeave: () => setSelected(null),
    }}
    fill="red"
    onClick={(entry) => setSelected(entry)}
    onMouseEnter={(entry) => setSelected(entry)}   // hover sets
    onMouseLeave={() => setSelected(null)}    
  />
</LineChart>

        )}
        

      </ResponsiveContainer>
     
  );

    </div>
    <div class='charts mt-0 float-center NMT-2' >


 <ResponsiveContainer  width="100%" height="100%"  >

<PieChart >
  <Pie
    data={dynamicPieData}
    className='mt-5 chart-pi bdr'
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    innerRadius={35}
    outerRadius={65}
    label={({ name, value }) => `${name}: ${formatCurrency(value)}`} // formatted label
    stroke="transparent"
  >
    {dynamicPieData.map((entry, index) => (
      <Cell key={index} fill={index === 0 ? "#82ca9d" : "red"} />
    ))}
  </Pie>
  <Tooltip formatter={formatCurrency} /> {/* formatted tooltip */}
  <Legend />
</PieChart>


      </ResponsiveContainer>
  
    </div><br />

             <TabTheme onLoad={() => setDarkMode(!darkMode)}/>
</main>
  )
}

export default UserHomeView