import React from "react";

export default function Footer() {
  return (
    <div>
      <section class="footer">
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

        <a className='phonenumber' tel="+442034880982"> Tel: +44(0)2034880982</a>
        <p>@CopyRight 2022</p>
      </section>
    </div>
  );
}
