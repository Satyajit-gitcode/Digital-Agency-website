import React from 'react';
import logo from "../pics/Logo Icon 1.png"

export default function Footer() {
  return (
    <footer className="footer">

      
      <div className="footer-content">
        <div className="footer-left">
          <img src={logo} alt="Enver logo" className="footer-logo" />
          <h1 >Enver</h1>
        </div>
        <div className="footer-links">
          <a href="#support">Support</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-conditions">Terms and Conditions</a>
        </div>
        <div className="footer-bottom">
        <p>© 2020 Enver, All Rights Reserved</p>
      </div>
      </div>
      
    </footer>
  );
}
