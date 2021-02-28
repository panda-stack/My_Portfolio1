import React, {useState, useEffect} from 'react'
import Section from './Section'

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState('hidden');

  const handleSendEmailOnly = () => {
    if(!email) {
      document.getElementById('email-validate').innerHTML = 'Email is required';
      setVisible('visible');
      setTimeout(() => {
        setVisible('hidden');
        document.getElementById('email-validate').innerHTML = 'Email is not valid';
      }, 3000);
      return;
    }
    setSubmitted(true);
    let data = {'email': email, 'type': 'only-email'};
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/api/send_email', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            // Request finished. Do processing here.
        }
    }
    xhr.send(JSON.stringify(data));
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  }

  function validateEmail(e) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }
  
  function handleChangeEmail(event) {
    setEmail(event.target.value);  
    if (validateEmail(email)) {
      setSubmitted(false);
      setVisible('hidden');
    } else {
      setSubmitted(true);
      setVisible('visible');
    }
    return false;
  }

  useEffect(() => {
    if(!email) {
      setVisible('hidden');
      setSubmitted(false);
    }
  }, [email])

  return (
    <Section
      title='Email Only'
      subtitle='Send me your email here'
      className='newsletter-section'
      id='products'
    >
      <div className='row justify-content-center'>
        <div className='col-md-10 col-lg-7'>
          <div className='newsletter-form'>
            <div className='form-group'>
              <input
                type='email'
                value={email}
                onChange={handleChangeEmail}
                className='form-control'
                placeholder='Enter Your E-Mail'
                required
              />
              <button className='btn mybtn2' disabled={submitted} onClick={handleSendEmailOnly}>
                <span className='mr-2'>Send Email</span>
                <i className='far fa-paper-plane'></i>
              </button>
            </div>
          </div>
          <p 
            id='email-validate'
            style={{visibility: visible, color: 'red', fontSize: '15px', marginTop: '5px', marginLeft: '25px'}}
          >
            Email is not valid
          </p>
        </div>
      </div>
    </Section>
  )
}