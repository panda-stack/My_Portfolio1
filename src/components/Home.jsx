import React from 'react'
import fullStackImg from '../img/full-stack-img1.png'
import ResumePDF from '../assests/resume.pdf'

export default function Home() {
  return (
    <section className='home-section' id='home'>
      <div className='bg-shapes'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='home-content'>
              <h1>Senior full-stack Developer</h1>
              <p>
                As I'm a senior full-stack Web Developer with over 5 years of experience, if you have the idea then 
                I will make sure it's implemented perfectly. 
                My primary skill set includes React/Redux, Next and Vue with JS/TS and 
                Node/Express, Python/Django, DRF. I have a strong expertise in Software development life cycle from 
                modeling to deployment.
              </p>
              <button className={'btn mybtn1'} onClick={() => window.open(ResumePDF)}>
                Download CV
              </button>
            </div>
          </div>
          <div className='col-lg-6 order-first order-lg-last'>
            <div className='home-img'>
              <img src={fullStackImg} alt='product' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
