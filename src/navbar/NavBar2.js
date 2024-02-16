import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import img1 from './img1.png';
export default function NavBar2() {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };
    const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const toggleAcademicsDropdown = () => {
    setAcademicsDropdownOpen(!academicsDropdownOpen);
  };

  const toggleContactDropdown = () => {
    setContactDropdownOpen(!contactDropdownOpen);
  };
  return (
  
    <nav className="navbar navbar-expand-lg  sticky-top" style={{ backgroundColor: 'white', fontFamily: 'sans-serif', fontSize: '20px', gap:'20px' }}>
      <div className="container-fluid">
      <div className="navbar-brand d-flex align-items-center">
          <Link to="/" className="nav-link text-black" style={{ textDecoration: 'none' }}>
            <img src={img1} width="100" height="80" className="d-inline-block align-top" alt="Logo" />
          </Link>
          </div>
     {/* Toggler/collapsible Button */}
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" onClick={toggleNavbar} aria-expanded={!collapsed}>
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className={`collapse navbar-collapse justify-content-end ${collapsed ? '' : 'show'}`} id="navbarNav" style={{  fontSize:'20px',fontWeight:'bold' }}>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/" className="nav-link active text-black">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-black">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/happen" className="nav-link text-black">Happenings</Link>
            </li>
            <li className="nav-item" onMouseEnter={toggleAcademicsDropdown} onMouseLeave={toggleAcademicsDropdown}>
              <Link to="/academics" className="nav-link text-black">Academics</Link>
              {academicsDropdownOpen && (
                <div className={`dropdown-menu ${academicsDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <Link to="/program1" className="dropdown-item">Programs</Link>
                  
                </div>
              )}
            </li>
            <li className="nav-item" onMouseEnter={toggleContactDropdown} onMouseLeave={toggleContactDropdown}>
              <Link to="/contacts" className="nav-link text-black">Contact Us</Link>
              {contactDropdownOpen && (
                <div className={`dropdown-menu ${contactDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                  <Link to="/career1" className="dropdown-item">Career</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
</div>
    </nav>
    
  )
}
