import React from 'react'
import kidsimage5 from "../images/kidsimage(5).jpeg";
import newYork from "../images/newyork.png";
import kidsimage4 from '../images/kidsimage(4).jpeg';


export default function Campus() {
  return (
    <div>
          <div class="divider">
      <section class="campus">
        <h1>Our Services</h1>

        <div class="row">
          <div class="campus-col">
            <img src={kidsimage5} />

            <div class="layer">
              <h3>Tuition can take place during school, afterschool, evenings or weekends.</h3>
            </div>
          </div>

          <div class="campus-col">
            <img src={newYork} />

            <div class="layer">
              <h3>Both in person and online tuition is offered depending on tutor allocation and preference.</h3>
            </div>
          </div>

          <div class="campus-col">
            <img src={kidsimage4} />

            <div class="layer">
              <h3>All tutors are fully qualified outstanding teachers fully trained to teach vulnerable groups.</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
