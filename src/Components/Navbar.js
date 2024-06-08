import React, { useEffect } from 'react'
import logo from "../images/LogoNew.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
  var navLinks = ""

  useEffect(() => {
    navLinks = document.getElementById("navLinks");
  }, [])

  function showMenu() {
    navLinks.style.right = "0";
  }
  function hideMenu() {
    navLinks.style.right = "-200px";

  }
  return (
    <div>
      <nav>
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
        <div class="nav-links" id="navLinks">
          <i class="fa-solid fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/aboutUs"}>About</Link></li>
            <li><Link to={"/prices"}>Prices</Link></li>
            <li><Link to={"/contactUs"}>Contact</Link></li>
          </ul>
        </div>
        <i class="fa-solid fa-bars" onClick={showMenu}></i>
      </nav>
    </div>
  )
}
