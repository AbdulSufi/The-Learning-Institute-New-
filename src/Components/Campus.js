import React from 'react'
import london from "../images/london.png";
import newYork from "../images/newyork.png";
import washington from '../images/washington.png';


export default function Campus() {
  return (
    <div>
          <div class="divider">
      <section class="campus">
        <h1>Our Services</h1>
        <p>
          We offer you alternative services 
        </p>

        <div class="row">
          <div class="campus-col">
            <img src={london} />

            <div class="layer">
              <h3>LONDON</h3>
            </div>
          </div>

          <div class="campus-col">
            <img src={newYork} />

            <div class="layer">
              <h3>NEW YORK</h3>
            </div>
          </div>

          <div class="campus-col">
            <img src={washington} />

            <div class="layer">
              <h3>WASHINGTON</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
