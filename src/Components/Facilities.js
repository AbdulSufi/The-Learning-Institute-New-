import React from 'react'
import tutoring1 from "../images/kidsimage(2).jpeg";
import onlinelearning from "../images/kidsimage(10).jpeg";
import tutoring2 from "../images/kidsimage(3).jpeg";

export default function Facilities() {
  return (
    <div>
      <section class="facilities">
        <h1>Our Unique Approach</h1>
        <p>
          With every team member being a qualified teacher, our focus remains
          steadfast on providing unparalleled learning experiences for every pupil
          we serve.
        </p>

        <div class="row">
          <div class="facilities-cols">
            <img src={tutoring1} />
            <h3>Curriculum Alignment</h3>
            <div class="facilities-cols-inner">
              <ul>
                <li>
                  Tailor online lessons to align with the curriculum, ensuring
                  targeted intervention to address specific knowledge gaps and
                  facilitate learning.
                </li>
                <br />
                <li>
                  Our teachers deliver bespoke learning plans that prioritize
                  individual needs and learning objectives, enabling students to
                  progress and achieve measurable outcomes whilst building
                  rapport.
                </li>
              </ul>
            </div>
          </div>

          <div class="facilities-cols">
            <img src={onlinelearning} />
            <h3>Engaging Virtual Classroom</h3>
            <div class="facilities-cols-inner">
              <ul>
                <li>
                  Leverage a diverse range of interactive tools and multimedia
                  resources within the online classroom to create dynamic and
                  immersive learning experiences.
                </li>
                <br />
                <li>
                  Foster active participation and engagement among students
                  through collaborative activities tailored to individual learning
                  styles, promoting deeper understanding and progress against
                  predefined targets.
                </li>
              </ul>
            </div>
          </div>

          <div class="facilities-cols">
            <img src={tutoring2} />
            <h3>Holistic Learning Experience</h3>
            <div class="facilities-cols-inner">
              <ul>
                <li>
                  Where appropriate, liaise with educational institutions, Local
                  Authorities, GTAs, SENCOs, and DSLs to address students' diverse
                  needs.
                </li>
                <br />
                <li>
                  Deliver holistic tuition to promote overall student welfare and
                  academic progress in a nurturing learning environment. Nurture students' academic, emotional, and social growth for comprehensive success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
