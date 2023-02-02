import React from 'react'
import { Link } from 'react-router-dom'
import Img from '../../assets/images/Home/BreakfastB12.jpg'
function HomeAbout() {
    return (
        <section id='home-about'>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <img className='home-about-image' src={Img} alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 home-about-texts">
                        <div className="home-about-content">
                            <h1 className='home-about-title'>BOHO TEA & WINE ROOM</h1>
                            <h1 className='home-about-title'>EXCLUSIVE FOOD FOR YOU</h1>
                            <p className='home-about-label'>About restaurant</p>
                            <p className='home-about-text-up'>Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.</p>
                            <p className='home-about-text-down'>Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon clown triggerfish swamp-eel paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe eel armorhead catfish, moray eel silverside! Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish idol</p>
                            <div className='home-about-button-area'>
                                <Link to={'/about'} className="home-about-button">Explore more</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeAbout
