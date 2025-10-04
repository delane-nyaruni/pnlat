import React, { useState } from 'react'
import { FaUserCircle,  FaTable,FaCog ,FaServer, FaCloud, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BsFillEnvelopeFill }  from 'react-icons/bs'
import { CloseButton } from 'reactstrap'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function Sidebar({openSidebarToggle, OpenSidebar}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FaUserCircle  className='icon_header '/><br /> <span className='manage-acc-btn btn'>Manage Account</span>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}> <CloseButton className='btn-effect' variant='white' /> </span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item btn-effect'>
            <Link to="">
            <BsFillEnvelopeFill className='icon'/> Mail
            </Link>
            </li>
            <li className='sidebar-list-item btn-effect'>
            <Link to="">
            <FaTable className='icon'/> Log
            </Link>
            </li>
            <li className='sidebar-list-item btn-effect'>
            <Link to="">
            <FaCog className='icon'/> Settings
            </Link>
            </li>
            <li className='sidebar-list-item btn-effect'>
            <Link to="">
            <FaServer className='icon'/> Server
            </Link>
            </li>
            <li className='sidebar-list-item btn-effect'>
             <Link to="/dfms/entities/system/backup" >
            <FaCloud className='icon'/> Backup
            </Link>
            </li>


            <li  onClick={() => setModalIsOpen(true)}  className='sidebar-list-item btn-effect'>
                <Link to="">
                    <FaSignOutAlt className='icon'/> Quit
                </Link>
            </li>
    <Modal className='four-z-index' isOpen ={modalIsOpen}
     shouldCloseOnOverlayClick={false}
    style={{
      overlay:{backgroundColor: '#5e5c5cb7', },
      content:{ overflow: 'auto'}
    }}
    onRequestClose={() => setModalIsOpen(false)}>

{/* <!-- Logout Modal--> */}
    <div class="modalu fades three-z-index" id="logoutModal" tabindex="o-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content transparentBackgound">
                <div class="modal-header  ">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button onClick={() => setModalIsOpen(false)} class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <CloseButton className='btn-effect' variant='red' />
                        {/* <span aria-hidden="true">X</span> */}
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session. Make sure you have saved your data before Logout !!!.</div>
                <div class="modal-footer modal-footer-hidden">
                    <button onClick={() => setModalIsOpen(false)} class="btn btn-dark" type="button" data-dismiss="modal">Cancel</button>
                    <Link class="btn btn-danger" to="/login">Logout</Link>
                </div>
            </div>
        </div>
    </div>

      {/* <h2>Modal</h2>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Cls</button>
      </div> */}

    </Modal>
        </ul>
    </aside>
  )
}

export default Sidebar