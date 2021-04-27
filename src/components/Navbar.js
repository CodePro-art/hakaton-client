import React, { Link } from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          src="https://img.icons8.com/clouds/2x/storytelling.png"
          alt="story"
          style={{ width: 100 }}
        />
        <span className="primery">Child's</span>
        <span className="secondary">Play</span>
      </div>
      <nav role="navigation" className="primary-navigation">
        <ul className="nav-ul">
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/">Stories</Link>
          </li>
          <li>
            <Link to="/">Games</Link>
          </li>
          <li>
            <Link to="/">Poetry</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
