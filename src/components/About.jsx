import React from 'react'
import aboutImg from '../img/me.jpg'
import Section from './Section'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <Section className='about-section' id='about'>
      <div className='row'>
        <div className='col-lg-6 d-flex'>
          <div className='about-img'>
            <img src={aboutImg} alt='product' />
          </div>
        </div>

        <div className='col-lg-6 order-first order-lg-last'>
          <SectionTitle
            title='About me'
            subtitle='Senior Full-Stack Developer'
            isLeft
          />

          <div className='about-content'>
            <p>
              I hope my profile explains my full-stack skills and experiences on Web development for more than 5 years 
              of hands-on efficiently coding websites and applications using modern technologies.
            </p>

            <ul className='list-unstyled'>
              <li>
                <i className='fas fa-check'></i>
                React/Redux, Next, Vue, Svelte, Quasar with JS/TS
              </li>
              <li>
                <i className='fas fa-check'></i>
                Material-UI, Tailwind-CSS, Antd, Styled-Component
              </li>
              <li>
                <i className='fas fa-check'></i>
                Python/Django, DRF, Node/Express, PHP, Laravel on back-end
              </li>
              <li>
                <i className='fas fa-check'></i>
                Integral Roles with front-end and back-end
              </li>
              <li>
                <i className='fas fa-check'></i>
                Punctuality, Responsive, Pixel Perfect and Fast Learner
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
