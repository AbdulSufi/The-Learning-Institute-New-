import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div>
      <section class="header">
        <Navbar />

        <div class="text-box">
          <h1>Learning Institute</h1>
          <p>
          Providing tailored tuition to Primary and Secondary school students, our team of outstanding qualified teachers specialise in meeting diverse pupil needs, including Special Educational Needs (SEN), Looked After Children (LAC) and pupils in Alternative Provision (AP). We prioritise a holistic approach to education which is why all our tutors utilise trauma-informed practices and cognitive behaviour therapy.
          </p>
          <a href="mailto:Info@learning-institute.co.uk" class="hero-btn">
            CONTACT US <br></br>
          </a>
        </div>
      </section>
    </div>
  );
}
