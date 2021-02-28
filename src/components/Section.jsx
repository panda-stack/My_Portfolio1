import React from 'react'
import SectionTitle from './SectionTitle'

export default function Section({
  id = '',
  className = '',
  children,
  title,
  subtitle,
  style,
}) {
  return (
    <section id={id} className={className} style={style}>
      <div className='container'>
        {title && subtitle && (
          <SectionTitle title={title} subtitle={subtitle} />
        )}
        {children}
      </div>
    </section>
  )
}
