import React from "react";
import logo from "../images/logo.png"


export default function Footer() {
  return (
    <div>
      {/* <section class="footer">
        <h4>About Us</h4>
        <p>
          The Learning Institute offers top-tier online tuition with qualified
          teachers for key stages 1 to 4. Our tutors undergo rigorous compliance
          checks, and we provide a wealth of curriculum-aligned resources. We
          offer flexible scheduling, manage administrative tasks, and focus on
          holistic student progress with regular sessional reports.
        </p>

        <div class="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>

        <div className="contact">
          <h4>Contact:</h4>
          <a className='contactDetails' tel="+442034880982"> Tel: +44(0)2034880982</a>
          <a className='contactDetails' email="Info@learning-institute.co.uk"> Email: Info@learning-institute.co.uk</a>
          <a className='contactDetails' Address="Info@learning-institute.co.uk"> Address: London, United Kingdom</a>
        </div>

        <div className="copyright">
          <p>@CopyRight 2024</p>
        </div>

      </section>  */}

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


        </div>
    </footer>

    <div class="copyrightSection">
        <p> @Copyrights 2024 | All Rights Reserved | The Learning Institute</p>
    </div>
      
    </div>
  );
}
