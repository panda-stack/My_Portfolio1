import React from 'react'
import Button from './Button'
import Section from './Section'

export default function Error() {
  return (
    <Section
      title='Error 404!'
      subtitle='THE PAGE YOU WERE LOOKING FOR DOESNT EXIST.'
      className='testinomial-section'
      style={{ paddingTop: '150px' }}
      id='testinomial'
    >
      <div className='row text-white text-center justify-content-center'>
        <div className='col-lg-8'>
          <p>YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED.</p>
          <Button title='Return to Home' href='/' />
        </div>
      </div>
    </Section>
  )
}
