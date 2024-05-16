import React from "react";
import logo from "../images/logo.png";

export default function Footer() {
  return (
    <div className="footer-parent">

      <footer>
        <div class="footerContent">
          <div class="quickLinks">
            <p class="footerHeadings">Quick Links</p>
            <p class="footerText">Home</p>
            <p class="footerText">About</p>
            <p class="footerText">Services</p>
            <p class="footerText">Prices</p>
            <p class="footerText">Contact</p>
          </div>

          <div class="legalServices">
            <p class="footerHeadings">Legal Stuff</p>
            <p class="footerText">Privacy Policy</p>
            <p class="footerText">Terms & Conditions</p>
            <p class="footerText">Whistle Blowing Policy</p>
            <p class="footerText">Other Policies</p>
          </div>

          <div class="ourServices">
            <p class="footerHeadings">Contact Info</p>
            <p class="footerText">Address: London, United Kingdom</p>
            <p class="footerText">Phone: +44(0)2034880982 </p>
            <p class="footerText">Email: Info@learning-institute.co.uk</p>
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
