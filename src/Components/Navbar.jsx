// Navbar.js
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbarrr'>
      <div className='pudding'>
      <div className="mainnav">
      <div className="logo">
        <div className="logoimg"></div>
        <div>Enver</div>
      </div>

      <div className={`navigation_links ${isOpen ? 'active' : ''}`}>
        <ul  className='navlinks' type="none">
          <li>Home</li>
          <li>Service</li>
          <li>Our Projects</li>
          <li>About Us</li>
          
        </ul>
        <ul type="none">
            <div className="contacts"> 
            <button>Contacts</button>
          </div>
        </ul>
      </div>

      
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>
    </div>
    </div>
    </div>
  );
}
