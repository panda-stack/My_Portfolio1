import React, {useState, useEffect} from 'react'
import { contactItemsData } from '../Database'
import Section from './Section'

const ContactItem = ({ item: { icon, title, subtitle } }) => {
  return (
    <div className='contact-item'>
      <div className='icon'>
        <i className={icon}></i>
      </div>
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  )
}

export default function Contact() {
  const contactItems = contactItemsData

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [visibleName, setVisibleName] = useState('hidden');
  const [visibleEmail, setVisibleEmail] = useState('hidden');
  const [visibleSubject, setVisibleSubject] = useState('hidden');
  const [visibleMessage, setVisibleMessage] = useState('hidden');

  const [submitPossible, setSubmitPossible] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  }

  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  }

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  }

  function validateEmail(e) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  }
  
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);  
    if (validateEmail(email)) {
      setVisibleEmail('hidden');
      setSubmitPossible(true);
    } else {
      setVisibleEmail('visible');
      setSubmitPossible(false);
    }
    return false;
  }

  useEffect(() => {
    if(!email) {
      setVisibleEmail('hidden');
    }
  }, [email]);

  const handleSubmit = () => {
    if(!name) {
      setVisibleName('visible');
      setTimeout(() => {
        setVisibleName('hidden');
      }, 3000);
    }
    if(!email) {
      setVisibleEmail('visible');
      document.getElementById('email-field').innerHTML = 'Email is required';
      setTimeout(() => {
        setVisibleEmail('hidden');
        document.getElementById('email-field').innerHTML = 'Email is not valid';
      }, 3000);
    }
    if(!subject) {
      setVisibleSubject('visible');
      setTimeout(() => {
        setVisibleSubject('hidden');
      }, 3000);
    }
    if(!message) {
      setVisibleMessage('visible');
      setTimeout(() => {
        setVisibleMessage('hidden');
      }, 3000);
    }
    if(!name || !email || !subject || !message) {
      return;
    }
    if(!submitPossible) {
      return;
    }
    setSubmitted(true);
    let data = {'name': name, 'email': email, 'subject': subject, 'message': message};
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/send_email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log(this);
        }
    }
    xhr.send(JSON.stringify(data));
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    }, 3000);
  }

  return (
    <Section
      title='Contact me'
      subtitle='Please send me your info in this form'
      className='contact-section'
      id='contact'
    >
      <div className='row'>
        <div className='col-md-7'>
          <div className='contact-form'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    value={name}
                    onChange={handleChangeName}
                    className='form-control'
                    placeholder='Your Name'
                  />
                </div>
                <p 
                  id='name-field'
                  style={{visibility: visibleName, color: 'red', fontSize: '15px', marginTop: '-10px', marginLeft: '5px'}}
                >
                  Name is required
                </p>
              </div>

              <div className='col-md-6'>
                <div className='form-group'>
                  <input
                    type='text'
                    value={email}
                    onChange={handleChangeEmail}
                    className='form-control'
                    placeholder='Your Email'
                  />
                </div>
                <p 
                  id='email-field'
                  style={{visibility: visibleEmail, color: 'red', fontSize: '15px', marginTop: '-10px', marginLeft: '5px'}}
                >
                  Email is not valid
                </p>
              </div>
            </div>

            <div className='form-group'>
              <input
                type='text'
                value={subject}
                onChange={handleChangeSubject}
                className='form-control'
                placeholder='Your Subject'
              />
            </div>
            <p 
              id='subject-field'
              style={{visibility: visibleSubject, color: 'red', fontSize: '15px', marginTop: '-10px', marginLeft: '5px'}}
            >
              Subject is required
            </p>

            <div className='form-group'>
              <textarea
                value={message}
                onChange={handleChangeMessage}
                className='form-control'
                placeholder='Message'
              ></textarea>
            </div>
            <p 
              id='subject-field'
              style={{visibility: visibleMessage, color: 'red', fontSize: '15px', marginTop: '-10px', marginLeft: '5px'}}
            >
              Message is required
            </p>

            <button className='btn mybtn2' disabled={submitted} onClick={handleSubmit}>
              <span className='mr-2'>Submit</span>
              <i className='far fa-paper-plane'></i>
            </button>
          </div>
        </div>
        <div className='col-md-5 order-first order-md-last'>
          {contactItems.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Section>
  )
}
