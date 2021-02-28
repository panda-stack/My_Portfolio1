import React from 'react'
import Section from './Section'
import { testiData } from '../Database'

let score1 = ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star']
let score2 = ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star-half-alt']
let score3 = ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star']

const TestinomialItem = ({ testi: { comment, avatar, name, email, company, score, link } }) => {
  return (
    <div className='testi-item'>
      <div className='testi-comment'>
        <p>
          <i className='fas fa-quote-left'></i>
          {comment}
          <i className='fas fa-quote-right'></i>
        </p>

        {score === 5 && <ul className='stars list-unstyled'>
          {score1.map((item, index) => {
            return <li key={index}>
              <i className={item}></i>
            </li>
          })}
        </ul>}

        {score === 4.5 && <ul className='stars list-unstyled'>
          {score2.map((item, index) => {
            return <li key={index}>
              <i className={item}></i>
            </li>
          })}
        </ul>}

        {score === 4 && <ul className='stars list-unstyled'>
          {score3.map((item, index) => {
            return <li key={index}>
              <i className={item}></i>
            </li>
          })}
        </ul>}
      </div>

      <div className='client-info'>
        <img src={avatar} alt='testinomial' />
        <h5>{name}</h5>
        <p><i className='fas fa-envelope'></i> <i>{email}</i></p>
        <a href={link} target='_blank'>{company}</a>
      </div>
    </div>
  )
}

export { TestinomialItem }

export default function Testinomial() {
  const testiItems = testiData
  return (
    <Section
      title='Testimonial'
      subtitle='My Satisfied Clients Feedback'
      className='testinomial-section'
      id='testinomial'
    >
      <div className='row'>
        <div className='owl-carousel' id='testinomial-carousel'>
          {testiItems.map((testi, index) => (
            <div className='col-lg-12' key={index}>
              <TestinomialItem testi={testi} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
