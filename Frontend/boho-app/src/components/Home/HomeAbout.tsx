import React from 'react'
import Img from '../../assets/images/Home/BreakfastB12.jpg'
function HomeAbout() {
    return (
        <section id='home-about'>
            <div className='container'>
                <div className="row mt-5">
                    <div className="col-6">
                        <img className='home-about-image' src={Img} alt="" />
                    </div>
                    <div className="col-6">
                        <div className="home-about-content">
                            <h1>Boho tea & wine room</h1>
                            <h1>Exclusive food for you</h1>
                            <p>About restaurant</p>
                            <p>Opaleye yellowtail snapper, velvet catfish, graveldiver banded killifish, Old World rivuline catalufa eagle ray Moorish idol. Herring smelt barbeled dragonfish, tommy ruff.</p>
                            <p>Queen danio velvet catfish Sacramento blackfish, bullhead shark, Colorado squawfish Russian sturgeon clown triggerfish swamp-eel paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe eel armorhead catfish, moray eel silverside! Bluegill toadfish, orangespine unicorn fish. Manta Ray Moorish idol</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeAbout
