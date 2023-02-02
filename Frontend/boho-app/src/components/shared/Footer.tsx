import React from 'react'
import { Link } from 'react-router-dom'
import BohoLogo from '../../assets/images/boho new logo.png'
import CardLogos from '../../assets/images/icons/adv-image1.png'
import '../../assets/style/shared/footer/footer.css'
import { FaInstagram, FaTripadvisor, FaFacebookF } from 'react-icons/fa';
function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className="footer">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1">
                        <div className="row">
                            <img className='logo' src={BohoLogo} alt="" />
                        </div>

                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1">
                        <div className="footer-up">
                            <p className='footer-label'>LOCATION</p>
                        </div>
                        <div className='footer-down'>
                            <p className='text-center'>Hәzi Aslanov, 84, Baku, Azerbaijan</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="footer-up">
                            <p className='footer-label'>PHONE</p>
                        </div>
                        <div className='footer-down'>
                            <p>+994 50 209 22 94</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="footer-up">
                            <p className='footer-label'>HOURS</p>
                        </div>
                        <div className='footer-down'>
                            <p className='footer-hour-details'>Mon - Sun 10:00 - 01:00</p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                        <div className="footer-up">
                            <p className='footer-label'>PAYMENT</p>
                        </div>
                        <div className="footer-down">
                            <img className='card-logos' src={CardLogos} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 socials">
                        <div className="footer-up">
                            <p className='footer-label'>FOLLOW US</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-2 col-xs-2 soc-area">
                                <a target={'_blank'} className='social-logo' href='https://www.facebook.com/bohoteaandwineroom/'>
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-2 col-sm-2 soc-area">
                                <a target={'_blank'} className='social-logo' href='https://www.instagram.com/bohoteaandwine/?hl=en'>
                                    <FaInstagram />
                                </a>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-2 col-sm-2 soc-area">
                                <a target={'_blank'} className='social-logo' href='https://www.tripadvisor.com/Restaurant_Review-g293934-d12165225-Reviews-Boho_Tea_Room-Baku_Absheron_Region.html'>
                                    <FaTripadvisor />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="end">
                    <div className="row justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" >
                            <ul className='end-menu'>
                                <li>
                                    <Link  className='end-menu-link' to={'/'}>Home</Link>
                                </li>
                                <li>
                                    <Link className='end-menu-link' to={'/about'}>About</Link>
                                </li>
                                <li>
                                    <Link className='end-menu-link' to={'/contact'}>Contact</Link>
                                </li>
                                <li>
                                    <Link className='end-menu-link' to={'/menu'}>Menu</Link>
                                </li>
                                <li>
                                    <Link className='end-menu-link' to={'/gallery'}>Gallery</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <p className='text-center end-text'>2023 Boho Tea & Wine Room. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
