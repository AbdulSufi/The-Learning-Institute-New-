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
          Providing tailored tuition to primary and secondary school students, our team of outstanding qualified teachers specialise in meeting diverse pupil needs and groups, including SEN, LAC and AP. We prioritise a holistic approach to education, with additional training in trauma-informed practices and cognitive behavior therapy for our teachers. Students benefit from personalised attention, fostering progress and maximizing their potential.
          </p>
          <a href="mailto:john@gmail.com" class="hero-btn">
            john@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
