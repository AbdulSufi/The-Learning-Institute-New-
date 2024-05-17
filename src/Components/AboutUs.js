import React from 'react'
import kidsimage from '../images/kidsimage(11).jpeg';

export default function AboutUs() {
  return (

    <div>
      <h1 className='aboutUs-h1'>About Us</h1>
      <section className='aboutUs-section'>

        <div className='aboutUs-text'>
          <p> At the Learning Institute, we're not just tutors; we're a dedicated team of qualified and experienced teachers
            committed to shaping the academic journey of primary and secondary school students in London. With a focus on
            personalized tuition, we understand that every student is unique, and so is their learning style. </p>
            
            <p>Our exceptional educators specialize in catering to diverse pupil needs and groups, including those with Special Educational Needs (SEN),
            Looked After Children (LAC), and Alternative Provision (AP). Through tailored support and personalized attention, we empower each student to progress confidently, maximizing their
            potential and achieving academic success.</p>
            
            <p> What sets us apart is our holistic approach to education.
            Beyond traditional tutoring, our teachers undergo additional training in trauma-informed practices and cognitive behavior
            therapy, ensuring that we address not only academic challenges but also the social and emotional well-being of our students.
          </p>
        </div>

        <div className='aboutUs-imageBox'>
          <img className='aboutUs-Image' src={kidsimage} />
        </div>

      </section>

    </div>
  )
}
