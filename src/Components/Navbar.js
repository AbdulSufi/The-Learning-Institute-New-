import React, { useEffect } from 'react'
import logo from "../images/LogoNew.png"

export default function Navbar() {
  var navLinks = ""

  useEffect(()=>{
    navLinks = document.getElementById("navLinks");
  }, [])
        
  function showMenu(){
      navLinks.style.right = "0";
  }
  function hideMenu(){
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
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Services</a></li>
            <li><a href="index.html">Prices</a></li>
            <li><a href="index.html">Contact</a></li>
          </ul>
        </div>
        <i class="fa-solid fa-bars" onClick={showMenu}></i>
      </nav>
    </div>
  )
}
