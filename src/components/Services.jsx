import React from 'react'
import { servicesData } from '../Database'
import SectionTitle from './SectionTitle'

const ServiceItem = ({ icon, title, subtitle }) => {
  return (
    <div className='features-item col-lg-12'>
      <div className='icon'>
        <i className={icon}></i>
      </div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Services() {
  const serviceItems = servicesData

  return (
    <section className='features-section bg-light' id='services'>
      <div className='container'>
        <SectionTitle title='Services' subtitle='Here are my expertises' />

        <div className='row'>
          {serviceItems.map(({ icon, title, subtitle }, index) => (
            <div className='col-lg-4 col-md-6 d-flex' key={index}>
              <ServiceItem icon={icon} title={title} subtitle={subtitle} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { ServiceItem }
