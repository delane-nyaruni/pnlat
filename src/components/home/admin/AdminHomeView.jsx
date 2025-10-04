import React from 'react'
import { BsFillBellFill} from 'react-icons/bs'
import { FaTags, FaRegHospital } from 'react-icons/fa'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { GiMilkCarton } from 'react-icons/gi';
function AdminHomeView() {

    
  const data = [
    {
      name: 'M',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'T',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'W',
      uv: 2000,
      pv: 4800,
      amt: 2290,
    },
    {
      name: 'T',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'F',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'S',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'S',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
     

  return (
    <main className='main-container'>
    <div className='main-title'>
        <h4 class="text-gray-500">Admin Dashboard</h4>
    </div>

    <div className='main-cards'>
        <div className='card btn-effect shadow '>
            <div className='card-inner'>
                <h6>Total Cows</h6>
                <FaTags className='card_icon iconTotal'/>
            </div>
            <h3>300</h3>
        </div>
        <div className='card btn-effect shadow '>
            <div className='card-inner'>
                <h6>Milk</h6>
                <GiMilkCarton className='card_icon milk-bottle'/>
            </div>
            <h3>121</h3>
        </div>
        <div className='card btn-effect shadow'>
            <div className='card-inner'>
                <h6>Intensive Care</h6>
                <FaRegHospital className='card_icon i-care'/>
            </div>
            <h3>33</h3>
        </div>
        <div className='card btn-effect shadow'>
            <div className='card-inner'>
                <h6>Alerts</h6>
                <BsFillBellFill className='card_icon all-alerts'/>
            </div>
            <h3>42</h3>
        </div>
    </div>

    <div className='charts'>

      
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>

    </div>
    <br />
    <br />
    <br />
    <br />
             
</main>
  )
}

export default AdminHomeView