import React from "react";
import "./Navbar.css";

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

      <ul className="nav-ul">
        <li><a href="">About Us</a></li>
        <li><a href="">Stories</a></li>
        <li><a href="">Games</a></li>
        <li><a href="">Poetry</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
