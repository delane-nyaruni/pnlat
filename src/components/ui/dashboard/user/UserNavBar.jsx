import React, { useState, useEffect } from 'react'
import '../NavBar.css'
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCoins, FaUser } from 'react-icons/fa';
// FaRegFileAlt
const tabs = [
  {
    route: '/pnlat/dashboard',
    icon: FaHome,
    label: 'Home'
  },
  {
    route: '/pnlat/tokens',
    icon: FaCoins,
    label: 'Tokens',
    className: ' inventory-icon'
  },
  {
    route: '/pnlat/user',
    icon: FaUser,
    label: 'User'
  }
];

const handleClick = () => {
  if ('vibrate' in navigator) {
    navigator.vibrate(50); // Vibrate for 100ms
  }
}

const UserNavBar = () => {
   const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'enabled');
    useEffect(() => { 
      document.body.classList.toggle('dark-mode', darkMode); 
      localStorage.setItem('dark-mode', darkMode ? 'enabled' : 'disabled');
     }, [darkMode]); 
  
  return (
    <div onLoad={() => setDarkMode(!darkMode)}>
    <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
      <div className="container-fluid">
        
        {/* <a className="navbar-brand" href="/home">DRMS</a>
        <Nav className="ml-auto">
          <NavItem>
            <NavLink to="./Home.jsx" className="nav-link top-nav-link">
              <div>
                <FaHome size={45} className='topNavIcons' /><br />
                <span className='top-tab-label'>Home</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="../tasks/Daily.jsx" className="nav-link top-nav-link">
              <div>
                <FaTasks size={45} className='topNavIcons' /><br />
                <span className='top-tab-label'>Daily</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="../health/Health.jsx" className="nav-link top-nav-link">
              <div>
                <FaBriefcaseMedical size={45} className='topNavIcons' /><br />
                <span className='top-tab-label'>Health</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="../events/Events.jsx" className="nav-link top-nav-link">
              <div>
                <FaRegCalendarAlt size={45} className='topNavIcons' /><br />
                <span className='top-tab-label'>Events</span>
              </div>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/login" className="nav-link top-nav-link" activeClassName="active">
              <div>
                <FaRegFileAlt size={45} className='topNavIcons' /><br />
                <span className='top-tab-label'>Reports</span>
              </div>
            </NavLink>
          </NavItem>
        </Nav> */}
      </div>
    </nav>

    <nav className="navbar shadow fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
      <Nav className="w-100">
        <div className="d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className="nav-link bottom-nav-link btn-effect" activeClassName="active" onClick={handleClick}>
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  {React.createElement(tab.icon, { size: 40, className: 'mobileNavIcons' })}
                  <div className="bottom-tab-label">{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </nav>
  </div>
  )
}
export default UserNavBar