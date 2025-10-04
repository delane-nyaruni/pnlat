import { useState, useEffect } from 'react'
import { FaUserCircle, FaAngleRight, FaAngleLeft, FaCamera, FaTrashAlt, FaRegQuestionCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'

Modal.setAppElement('#root')


const ManageAcc = () => {
    const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');
    useEffect(() => { 
      document.body.classList.toggle('dark-mode', darkMode); 
      localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
     }, [darkMode]); 

         const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
    <div className='container' onLoad={() => setDarkMode(!darkMode)}>
     
        <div className='main-title mt-4 pb-1 '>
            <Link onClick={() => navigate(-1)}  class="btn btn-succes mt-2 pb-1 new-account-ticket float-ends">
            <FaAngleLeft size={25} /> 
            </Link>
            <br />
            <h4 class="text-gray-500 mt-2 float-end">User Details</h4>

        </div>
<br />
 <div className='sidebar-title '>
            <div className='sidebar-brand text-center '>
                <FaUserCircle size={80} className='icon_header ml-2 btn-effect text-gray-500'/><br /> 
                <button onClick={() => {navigate('/pnlat/user profilepic')}} className='manage-acc-btn btn mt-4'>Change Profile <FaCamera className='mr-1 ml-1'/> </button>
            </div>
           
        </div>

        <ul className='sidebar-list'>
            <li onClick={() => {navigate('/pnlat/mail')}}
                className='sidebar-list-item btn-effect'>
                <Link to="">
                Name<span className='small ML6 float-ends'>Tariro Nyaruni</span><FaAngleRight className=' float-end'/>
                </Link>
            </li>
            <li onClick={() => {navigate('')}}
                className='sidebar-list-item btn-effe'>
                <Link >
                Member Level<span className='small ML6 MEMBERSHIPLVL float-en'>Basic</span>
                </Link>
            </li>

            <li  onClick={() => {setModalIsOpen(true)}} 
            className='sidebar-list-item btn-effect'>
                <Link to="">
                 Delete Account
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
        <div class="modal-dialo container  ">
            <div class="modal-content theme-forced-color ">
                <div class="modal-header transparent ">
                    <h5 class="modal-title text-gray-800" id="exampleModalLabel">Delete User Account <FaRegQuestionCircle size={15} color='red'/> </h5>
                </div>
                <div class="modal-body text-center">
                     <FaTrashAlt size={75} color='red' className='mb-0 mt-4' />
                    <p className='small text-gray-500 mt-4 mb-0 '>
                    Select "Delete" below if you no longer require this app services. Note that you will lose all data. 
                    </p>
                </div>
                <div class="modal-footer modal-footer-hidden">
                    <Link class="btn btn-danger" to="/login">Delete</Link>
                    <button onClick={() => setModalIsOpen(false)} class="app-btn-def text-gray-500 btn btn-darks" type="button" data-dismiss="modal">Cancel</button>
                </div>
            </div>
        </div>


    </Modal>
        </ul>


<br /><br /><br /><br />
    </div>
    </>
  )
}

export default ManageAcc

