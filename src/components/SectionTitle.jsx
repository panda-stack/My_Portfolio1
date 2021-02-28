import React from 'react'

export default function SectionTitle({ title, subtitle, isLeft }) {
  const getRowClasses = () => {
    let classes = 'row '
    return isLeft ? classes : (classes += 'justify-content-center')
  }

  const getColClasses = () => {
    return isLeft ? 'col-lg-12' : 'col-lg-7'
  }
  return (
    <div className={getRowClasses()}>
      <div className={getColClasses()}>
        <div className='section-title'>
          <h1 className='title'>{title}</h1>
          <h2 className='subtitle'>{subtitle}</h2>
        </div>
      </div>
    </div>
  )
}
