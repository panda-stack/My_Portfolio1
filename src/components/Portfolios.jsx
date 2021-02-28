import React from 'react'
import Section from './Section'
import { portfoliosData } from '../Database'

const PortfolioItem = ({ product: { showcase, title, date, link, desc } }) => {
  return (
    <div className='products-item'>
      <div className='product-img'>
        <img 
          src={showcase} 
          alt='product' 
          className='img-fluid'
        />
        <div className='overlay'>
          <a className='btn mybtn1' href={link} target='_blank'>Go to Link</a>
        </div>
      </div>
      <div className='product-content'>
        <div className='product-price'>
          <span className='new-price'><a href={link} target='_blank'>{title}</a></span>
          <span className='old-price'>( {date} )</span>
        </div>
        <h5 className='product-name'>{desc}</h5>
      </div>
    </div>
  )
}

export { PortfolioItem }

export default function Portfolios() {
  const portfolioItems = portfoliosData
  return (
    <Section
      title='Portfolios'
      subtitle='Here are my representative projects'
      className='products-section'
      id='portfolios'
    >
      <div className='row'>
        <div className='owl-carousel' id='product-carousel'>
          {portfolioItems.map((product, index) => (
            <div
              className='col-lg-12'
              key={index}
            >
              <PortfolioItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
