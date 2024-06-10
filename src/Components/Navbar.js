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
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <div class="nav-links" id="navLinks">
          <i class="fa-solid fa-xmark" onClick={hideMenu}></i>
          <ul>
            <li><Link to={"/"} onClick={hideMenu}>Home</Link></li>
            <li><Link to={"/aboutUs"} onClick={hideMenu}>About</Link></li>
            <li><Link to={"/prices"} onClick={hideMenu}>Prices</Link></li>
            <li><Link to={"/contactUs"} onClick={hideMenu}>Contact</Link></li>
          </ul>
        </div>
        <i class="fa-solid fa-bars" onClick={showMenu}></i>
      </nav>
    </div>
  )
}
