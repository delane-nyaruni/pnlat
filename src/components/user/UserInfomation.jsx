import UserNavBar from "../ui/dashboard/user/UserNavBar"
import { useState, useEffect } from 'react'
import { FaUserCircle,  FaTable,FaCog ,FaQuestion , FaCloud, FaSignOutAlt, FaExclamationTriangle, FaRegCopy, FaRegQuestionCircle, FaHandsHelping } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { BsCopy, BsFillEnvelopeFill }  from 'react-icons/bs'
// import { CloseButton } from 'reactstrap'
import Modal from 'react-modal'

Modal.setAppElement('#root')


const UserInfomation = () => {
    const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');
    useEffect(() => { 
      document.body.classList.toggle('dark-mode', darkMode); 
      localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
     }, [darkMode]); 

         const [modalIsOpen, setModalIsOpen] = useState(false)
           const [showPopup, setShowPopup] = useState(false);


         
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText();
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (e) {
      const el = document.createElement('textarea');
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select(); 
      try {
        document.execCommand('copy');
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      } catch (err) {
        console.error('Copy failed', err);
        alert('Copy failed — please select and copy the address manually.');
      }
      
    }
  };


  return (
    <>
    <div className='container' onLoad={() => setDarkMode(!darkMode)}>
        {/* <div className='main-title mt-3'>
            <h4 class="text-gray-500">User Details</h4>
        </div> */}
                                           {showPopup && (
                <div className='auto' style={styles.popup}><BsCopy size={15} color='silver'  className='text-center'  /> User ID copied successful</div>
              )}
        <div className='float-end'>
        <p className='small right font-monospace pt-3 rounded text-gray-600'><code>User ID</code>: <span className='btn-effect'  onClick={handleCopy}aria-label="Copy address" >532643167 <FaRegCopy size={16} onClick={handleCopy}aria-label="Copy address"  style={styles.button} className='btn-effect' color="grey" /> </span> 
         
         </p>

        </div>
<br /><br /><br />
 <div className='sidebar-title '>
            <div className='sidebar-brand  '>
                <FaUserCircle size={60} className='icon_header ml-5 btn-effect text-gray-500'/><br /> 
                <button onClick={() => {navigate('/pnlat/manage user account')}} className='manage-acc-btn btn mt-4'>Manage Account</button>
            </div>
           
        </div>

        <ul className='sidebar-list'>
            <li onClick={() => {navigate('/pnlat/mail')}}
                className='sidebar-list-item btn-effect'>
                <Link to="">
                <BsFillEnvelopeFill className='icon'/> Mail
                </Link>
            </li>
            <li onClick={() => {navigate('/pnlat/log')}}
                className='sidebar-list-item btn-effect'>
                <Link to="">
                <FaTable className='icon'/> Log
                </Link>
            </li>
            <li onClick={() => {navigate('/pnlat/settings')}}
            className='sidebar-list-item btn-effect'>
            <Link to="/pnlat/settings">
            <FaCog className='icon'/> Settings
            </Link>
            </li>
            <li onClick={() => {navigate('/help')}}
                className='sidebar-list-item btn-effect'>
                <Link to="/help">
                <FaQuestion className='icon'/> Help
                </Link>
            </li>
            <li onClick={() => {navigate('/pnlat/backup')}}
                className='sidebar-list-item btn-effect'>
                <Link to="/dfms/entities/system/backup" >
                <FaCloud className='icon'/> Backup
                </Link>
            </li>
            <li onClick={() => {navigate('/pnlat/backup')}}
                className='sidebar-list-item btn-effect'>
                <Link to="/dfms/entities/system/backup" >
                <FaHandsHelping className='icon'/> Support
                </Link>
            </li>
            <li  onClick={() => { 
                // OpenSidebar
                setModalIsOpen(true)
                }
            } className='sidebar-list-item btn-effect'>
                <Link to="">
                    <FaSignOutAlt className='icon'/> Logout
                </Link>
            </li>
    <Modal className='four-z-index MT6 ' isOpen ={modalIsOpen}
     shouldCloseOnOverlayClick={false}
    style={{
      overlay:{backgroundColor: '#5e5c5cb7', },
      content:{ overflow: 'auto'}
    }}
    onRequestClose={() => setModalIsOpen(false)}>

{/* <!-- Logout Modal--> */}
    {/* <div class="modalu fades three-z-index" id="logoutModal" tabindex="o-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
        <div class="modal-dialo container  ">
            <div class="modal-content theme-forced-color ">
                <div class="modal-header transparent ">
                    <h5 class="modal-title text-gray-800" id="exampleModalLabel">Ready to Leave <FaRegQuestionCircle size={15} color='gray'/></h5>
                 
                </div>
                <div class="modal-body text-center">
                     <FaExclamationTriangle size={75} color='orange' className='mb-0 mt-4' />
                    <p className='small text-gray-500 mt-4 mb-0 '>
                    Select "Logout" below if you are ready to end your current session.
                    </p>
                </div>
                <div class="modal-footer modal-footer-hidden">
                    <Link class="btn btn-danger" to="/login">Logout</Link>
                    <button onClick={() => setModalIsOpen(false)} class="app-btn-def btn btn-darks text-gray-500" type="button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>
    {/* </div> */}

      {/* <h2>Modal</h2>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Cls</button>
      </div> */}

    </Modal>
        
        </ul>


<br /><br /><br />
        <UserNavBar className='mt-5'/>
    </div>
    </>
  )
}

const styles = {
 
  card: {
    width: 480,
    maxWidth: '95%',
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 6px 18px rgba(15,23,42,0.08)',
    padding: 24,
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: 22,
    color: '#0f172a',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 16,
    color: '#475569',
  },
  address: {
    userSelect: 'all',
    background: '#0f172a',
    color: '#fff',
    padding: '12px 14px',
    borderRadius: 8,
    overflowX: 'auto',
    fontSize: 13,
    lineHeight: '1.4',
  },
  actions: {
    marginTop: 14,
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    display: 'block',
    marginTop: 12,
    color: '#94a3b8',
    fontSize: 12,
  },
//   success:{
//  position: 'fixed',
//   top: 20,
//   left: 50,
//   transform: translateX(-50%),
//   background-color: #36f485,
//   color: white,
//   padding: 15px,
//   border-radius: 5px,
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2),
//   display: none;
//   z-index: 10 

//   } ,

  popup: {
    position: 'fixed',
    top: 20,
    background: 'rgb(8, 229, 100)',
    color: 'white',
    left:'25%',
    padding: '15px',
    borderRadius: 5,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    fontSize: 14,
  },
};

export default UserInfomation

