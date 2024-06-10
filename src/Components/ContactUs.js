import React from "react";

export default function ContactUs() {
  return (
    <section class="contact-us">
      <h1>Contact Us</h1>
      <div class="row">
        <div class="contact-col1">
          <div>
            <i class="fa-solid fa-home"></i>
            <span>
              <h5>
                Learning Institute, Office 6255, 321-323 High Road
              </h5>
              <p>Chadwell
              Heath, London, RM6 6AX, UK</p>
            </span>
          </div>

          <div>
            <i class="fa-solid fa-phone"></i>
            <span>
              <h5>020 34880982</h5>
            </span>
          </div>

          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>
              <h5>Info@learning-institute.co.uk</h5>
              <p>Email us your query</p>
            </span>
          </div>
        </div>

        <div class="contact-col">
          <form action="" method="post">
            <input type="text" name="userName" placeholder="NAME: " required />
            <input
              type="email"
              name="userEmail"
              placeholder="EMAIL: "
              required
            />
            <input
              type="text"
              name="userSubject"
              placeholder="Subject: "
              required
            />
            <textarea
              placeholder="MESSAGE: "
              rows="8"
              name="message"
              required
            ></textarea>
            <button type="submit" class="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
