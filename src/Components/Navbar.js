import React from 'react'
import logo from "../images/LogoNew.png"

export default function Navbar() {
  return (
    <div>
       <nav>
        <a href="index.html">
          <img src={logo} alt="logo" />
        </a>
        <div class="nav-links" id="navLinks">
          <i class="fa-solid fa-xmark"></i>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">About</a></li>
            <li><a href="index.html">Services</a></li>
            <li><a href="index.html">Prices</a></li>
            <li><a href="index.html">Contact</a></li>
          </ul>
        </div>
        <i class="fa-solid fa-bars"></i>
      </nav>
    </div>
  )
}
