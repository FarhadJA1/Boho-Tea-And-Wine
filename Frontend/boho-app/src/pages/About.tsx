import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import '../assets/style/About/about.css'
import AboutContent from '../components/About/AboutContent'

function About() {
  return (
    <div className='about-page'>
      <AboutHeader/>
      <AboutContent/>
    </div>
  )
}

export default About
