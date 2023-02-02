import React from 'react'
import Decorator from '../../assets/images/Home/orange-decorator.png'
function AboutHeader() {
    return (
        <div className='container'>
            <div className='about-header'>
                <img className='about-decorator' src={Decorator} alt="" />
                <h1>ABOUT US</h1>
                <img className='about-decorator' src={Decorator} alt="" />
            </div>
        </div>
    )
}

export default AboutHeader
