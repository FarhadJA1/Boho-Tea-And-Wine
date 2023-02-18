import React from 'react'
import '../assets/style/Contact/contact.css'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactMap from '../components/Contact/ContactMap'

function Contact() {
  return (
    <div className='contact-page'>
      <ContactHeader />
      <ContactMap/>
    </div>
  )
}

export default Contact
