import React from 'react'
import contactImage from "../images/contactImage.jpg";

export default function ContactUs() {
    return (
        <div className='contact-Section'>
            
            <h1 className='contact-h1'>Contact Us</h1> 
            <div className="contact-container">

                <div className="contact-info">
                    <p><strong>Phone:</strong> 020 34880982</p>
                    <p><strong>Email:</strong> <a href="mailto:Info@learning-institute.co.uk">Info@learning-institute.co.uk</a></p>
                    <p><strong>Address:</strong> Learning Institute, Office 6255, 321-323 High Road, Chadwell Heath, London, RM6 6AX, UK</p>
                </div>

                <div className='contactImage-container'>
                    <img className='contact-image' src={contactImage}></img>
                </div>


            </div>
        </div>


    )
}
