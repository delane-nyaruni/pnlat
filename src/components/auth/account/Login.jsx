import axios from 'axios'
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import NET_CONFIG from '../../../configs/NetworkConfig'
import { FaKey, FaLock, FaTimes } from 'react-icons/fa'

const protocol = NET_CONFIG.CONN_PROTOCOL;
const ip_address = NET_CONFIG.STATIC_IP;
const port_address = NET_CONFIG.PORT_ADDRESS;



const Login = () => {

    const [values, setValues] = useState({
        name: '',
        password:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${protocol}://${ip_address}:${port_address}/user_login`)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }


  return (
    <>
    
{/* //    <style>
// .msgError {
//     position: fixed;
//     top: 20px;
//     left: 50%;
//     transform: translateX(-50%);
//     background-color: #f44336;
//     color: white;
//     padding: 15px;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//     display: none;
// }
// .msgSuccess {
//     position: fixed;
//     top: 20px;
//     left: 50%;
//     transform: translateX(-50%);
//     background-color: #36f485;
//     color: white;
//     padding: 15px;
//     border-radius: 5px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//     display: none;
// }
//     </style> */}

{/* <body class="bg-gradient-primary main" onload="fullscreen()"> */}
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="car formBackgroudUI o-hidden border-0 shadw-lg my-2">
                    <div class="card-bod p-0">
                        <div class="row">
                            <div class="col-lg-12 d-none d-lg-block bg-logiimg"></div>
                            <div class="col-lg-12">
                                <div class="p-3">
                                    <div class="text-center">

                                    <FaLock className='FaAuth' size={90} style={{color:'blue', fill:" 0 0 9px rgb(239, 10, 10)",zIndex:0,
                           cursor:'pointer'}} />
        {/* <h1>Gene</h1> */}

        <br />
                                        <h1 class="h4 text-gray-600 mb-4 mt-2">Login</h1>
                                    </div>
                                    <form class="user" method="post" id="loginFsorm" onSubmit={handleSubmit}>
                                    <div class="form-group">
                                            <input type="text" class="form-control BR2 form-control-user textbox-height"
                                            onChange={e => setValues({...values, name: e.target.value})}  placeholder="Username" />
                                            
                                        </div>
                                       
                                        <div class="form-group">
                                            <input type="password" class="form-control BR2 form-control-user textbox-height"
                                            onChange={e => setValues({...values, password: e.target.value})}placeholder="Password" />
                                        </div>
                                        {/* <div class="form-group">
                                            <select id="role" name="userType" class="form-control form-control-user">
                                                <option value="student">Student</option>
                                                <option value="landlord">Landlord</option>
                                            </select>
                                        </div> */}
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input " id="customCheck" />
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user BR15 btn-block ">
                                        <FaKey size={23} className=' mr-2'/>
                                            Login
                                        </button>
                                        <Link to='/' class="btn btn-google btn-user BR15 btn-block ">
                                           <FaTimes size={25} className=' mr-2' />
                                            Quit
                                        </Link>
                                    </form>
                                    <br />
                                    <hr className='visible-hr' />
                                    <div class="text-center">
                                        <Link class="small" to="/dfms/entities/user/admin/dashboard">Forgot Password?</Link>
                                    </div>
                                    <div class="text-center">
                                        <Link class="small" data-toggle="modal" value='' data-target="#logoutModal" to="/register">Create an Account!</Link>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
       

        <div class="msgError" id="errorPopup">
            Invalid credentials.
        </div>
        <div class="msgError" id="emptyFields">
            Fill-in infomation.
        </div>
        <div class="msgSuccess" id="successPopup">
            Login success.
        </div>
     
        
    {/* <script>
        function exitSystem() {
            window.close();
        }

        document.addEventListener("DOMContentLoaded", function() {
            var rememberedEmail = localStorage.getItem("rememberedEmail");
            if (rememberedEmail) {
                document.getElementById("username").value = rememberedEmail;
                document.getElementById("customCheck").checked = true;
            }
        });

        document.getElementById("customCheck").addEventListener("change", function() {
            if (this.checked) {
                localStorage.setItem("rememberedEmail", document.getElementById("username").value);
            } else {
                localStorage.removeItem("rememberedEmail");
            }
        });
    </script> */}

{/* </body> */}
    </>
  )
}

export default Login