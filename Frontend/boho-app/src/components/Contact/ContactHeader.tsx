import React from 'react'
import ChefLogo from '../../assets/images/icons/chef.png'
import { FaInstagram, FaTripadvisor, FaFacebookF } from 'react-icons/fa';
function ContactHeader() {
    return (
        <section id='contact-header'>
            <div className="container">
                <div className="page-header-icon row">
                    <img className='chef-logo' src={ChefLogo} alt="" />
                </div>
                <div className='page-center-greeting'>
                    <div className='contact-greeting-up row'>
                        <span className='contact-up-left-line'></span>
                        <p className='contact-cafe-title'>Boho Tea & Wine Room</p>
                        <span className='contact-up-right-line'></span>
                    </div>
                    <div>
                        <h1 className='contact-center-text'>MAKE A RESERVATION</h1>
                    </div>
                    <div className='contact-greeting-down'>
                        <span className='contact-down-left-line'></span>
                        <p className='contact-opening-title'>Open Hours</p>
                        <span className='contact-down-right-line'></span>
                    </div>
                </div>
                <div className="row contact-opening-hours-area">
                    <div className='col-3 contact-opening-hours'>
                        <span className='days'>Monday - Sunday </span>
                        <span className='hours'>10:00 - 01:00 </span>
                    </div>
                </div>
                <div className='contact-number-area'>
                    <h1 className='contact-number'>(+994) 50 209-22-94</h1>
                </div>
               
            </div>
        </section>
    )
}

export default ContactHeader
