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
            Delivering tailored tuition to primary and secondary school
            students. Our team solely consists of outstanding qualified teachers
            with extensive training in meeting the various needs of pupils. We
            prioritise a holistic approach to education, providing additional
            training in trauma-informed practices and cognitive behavior therapy
            to all our teachers. Our students receive personalised attention and
            support, enabling them to progress and reach their full potential.
          </p>
          <a href="" class="hero-btn">
            Visit Us To Know More
          </a>
        </div>
      </section>
    </div>
  );
}
