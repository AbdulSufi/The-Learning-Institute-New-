import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-parent">

      <footer>
        <div class="footerContent">
          <div class="quickLinks">
            <p class="footerHeadings">Quick Links</p>
            <p class="footerText"><Link to={"/"} className="links">Home</Link></p>
            <p class="footerText"><Link to={"/aboutUs"} className="links">About</Link></p>
            <p class="footerText"><Link to={"/prices"} className="links" >Prices</Link></p>
            <p class="footerText"><Link to={"/contactUs"} className="links" >Contact</Link></p>
          </div>

          <div class="legalServices">
            <p class="footerHeadings">Legal Stuff</p>
            <p class="footerText"><Link to="/privacy" className="links" >Privacy Policy</Link></p>
            <p class="footerText"><Link to="/t&c" className="links">Terms & Conditions</Link></p>
            <p class="footerText"> <Link to="/safeguard" className="links">Safeguarding</Link></p>
          </div>

          <div class="ourServices">
            <p class="footerHeadings">Contact Info</p>
            <p class="footerText">Phone: 020 34880982 </p>
            <p class="footerText">Email: Info@learning-institute.co.uk</p>
            <p class="footerText footer-address">Address: <br></br>
              Learning Institute, Office 6255, <br></br>
              321-323 High Road, Chadwell Heath,   <br></br>
              London, RM6 6AX, UK</p>
          </div>

          <div class="subscribe-form">
            <p class="footerHeadings">Newsletter</p>
            <input
              type="email"
              class="email-input"
              placeholder="Enter your email"
            />
            <button class="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </footer>

      <div class="copyrightSection">
        <p> @Copyrights 2024 | All Rights Reserved | The Learning Institute</p>
      </div>

    </div>
  );
}
