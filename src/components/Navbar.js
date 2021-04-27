import React from "react";
import "./Navbar.css";
import { BsFillCaretDownFill } from 'react-icons/bs';

function Navbar() {
  return (
    
    <div className="navbar">
      <div className="logo-container">
        <img src="https://img.icons8.com/clouds/2x/storytelling.png" alt="story" style={{width: 100}}/>
        
        <span className="primery">
          Child's 
        </span>
        <span className="secondary">
          Play
        </span>
          
      </div>
      <nav role="navigation" className="primary-navigation">
        <ul className="nav-ul">
          <li><a href="/">About Us</a></li>
          <li><a href="/">Stories <BsFillCaretDownFill size={13}/></a>
          </li>
          <li><a href="/">Games</a></li>
          <li><a href="/">Poetry</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
