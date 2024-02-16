import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => {
      setCollapsed(!collapsed);
    };
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#10898d', fontFamily: 'Arial, sans-serif', fontSize: '20px' }}>
      <div className="container-fluid">
        {/* Left side with logo and contact info */}
        <div className="navbar-brand d-flex align-items-center">
          {/* Empty div for spacing */}
          <div className="flex-grow-1"></div>
          <div className="ml-md-3" style={{ marginRight: '100px' }}>
            <small className="mr-3">
              <a href="tel:123-456-7890" className="nav-link text-white d-inline" style={{ textDecoration: 'none', fontSize: '20px',fontWeight:'bold', fontFamily: 'Arial, sans-serif', margin: '0 10px', padding: '5px' }}>Contact: 123-456-7890</a>
            </small>
            <small>
              <a href="mailto:myschool@gmail.com" className="nav-link text-white d-inline" style={{ textDecoration: 'none', fontSize: '20px',fontWeight:'bold', fontFamily: 'Arial, sans-serif', margin: '0 10px', padding: '5px' }}>Email: myschool@gmail.com</a>
            </small>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
