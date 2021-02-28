import React from 'react'
import Section from './Section'
import { faqData } from '../Database'

const FaqItem = ({ ques, ans, items }) => {
  return (
    <div className='faq-item'>
      <h4>{ques}</h4>
      <p>{ans}</p>
      <ul style={{marginLeft: '18px', marginTop: '5px', fontSize: '13px'}}>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export { FaqItem }

export default function Faq() {
  const faqItems = faqData
  return (
    <Section
      title='Technical Questions'
      subtitle='Frequently Asked Question'
      className='faq-section'
      id='tech'
    >
      <div className='row'>
        {faqItems.map(({ ques, ans, items }, index) => (
          <div className='col-md-6' key={index}>
            <FaqItem ques={ques} ans={ans} items={items} />
          </div>
        ))}

        <div className='col-lg-12'>
          <p className='support-text text-center'>
            Any Question?            
          </p>
          <ul className='navbar-nav ml-auto' style={{textAlign: 'center'}}>
            <li className='nav-item'>
              <a className={'nav-link'} href='#products'>
                Please send me only your email below.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
