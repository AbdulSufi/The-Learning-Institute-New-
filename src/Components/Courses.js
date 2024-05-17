import React from "react";
import kidsimage6 from "../images/kidsimage(6).jpeg";
import kidsimage7 from "../images/kidsimage7.jpeg";
import kidsimage8 from "../images/kidsimage8.jpeg";

export default function Courses() {
  return (
    <div>
      <section class="course">
        <h1>Tailored Tuition for All Pupils</h1>
        <p>All our tutors are qualified teachers with PGCE and QTS</p>

        <div class="row">
          <div className="column-main">
            <img className="course-image" src={kidsimage6} width={150} />
            <div class="course-col">
              <h3>Looked After Child (LAC)</h3>
              <p>
                - All our LAC teachers receive enhanced level 2 safeguarding training
                <br />
                <br />
                - They are fully vetted in line with safer recruitment practices and hold
                enhanced DBSs <br />
                <br />
                - Trained in CBT and Trauma Informed Practices <br />
                <br />- Liaise with DSL and wider teams where appropriate and
                provide feedback for PEPs
              </p>
            </div>
          </div>

          <div className="column-main">
            <img className="course-image" src={kidsimage7} width={150} />
            <div class="course-col">
              <h3>Special Education Needs (SEN)</h3>
              <p>
                - Experienced in working with pupils with EHCP and
                pupils with set targets <br />
                <br />- Liaise with GTAs, SENCOs and wider teams where appropriate{" "}
                <br />
                <br />
                - Trained in CBT and Trauma Informed Practices <br />
                <br />
                - We work with pupils with autism/ASC, ADHD/ADD, Dyslexia, SEMH and Dyspraxia
              </p>
            </div>
          </div>


          <div className="column-main">
            <img className="course-image" src={kidsimage8} width={150} />
            <div class="course-col">
              <h3>Alternative Provision (AP)</h3>
              <p>
                - Our teachers have outstanding behaviour management skills
                <br />
                <br />
                - We value rapport building and holistic target setting
                <br />
                <br />
                - We promote progress by planning lessons aligned to the curriculum
                <br />
                <br />- Proactive communication and feedback to parents/schools
                regarding progress/attendance
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
