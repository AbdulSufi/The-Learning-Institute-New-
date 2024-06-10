import React, { useState } from 'react';
import logo from "../images/LogoNew.png";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuVisible, setMenuVisible] = useState(false);

  function showMenu() {
    setMenuVisible(true);
  }

  function hideMenu() {
    setMenuVisible(false);
  }

  return (
    <div>
      <nav>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <div className={`nav-links ${menuVisible ? 'visible' : ''}`}>
          <i className="fa-solid fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><Link to={"/"} onClick={hideMenu}>Home</Link></li>
            <li><Link to={"/aboutUs"} onClick={hideMenu}>About</Link></li>
            <li><Link to={"/prices"} onClick={hideMenu}>Prices</Link></li>
            <li><Link to={"/contactUs"} onClick={hideMenu}>Contact</Link></li>
          </ul>
        </div>
        <i className="fa-solid fa-bars" onClick={showMenu}></i>
      </nav>
    </div>
  );
}
