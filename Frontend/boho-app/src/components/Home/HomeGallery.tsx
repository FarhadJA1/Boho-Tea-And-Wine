import React from 'react'
import Img1 from '../../assets/images/Home/gal_1.jpg'
import Img2 from '../../assets/images/Home/gal-2.jpg'
import Img3 from '../../assets/images/Home/gal-3.jpg'
function HomeGallery() {
    return (
        <section id='home-gallery'>
            <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="home-gallery-header-area">
                        <h1 className='home-gallery-header'>AWESOME GALLERY OF OUR RESTAURANT</h1>
                        <p className='home-gallery-label'>Gallery</p>
                    </div>

                </div>
                <div className="row home-gallery-images">
                    <div className="col-xl-4 col-lg-4 col-md-11 home-gallery-image-area">
                        <img className='home-gallery-image' src={Img1} alt="" />
                        <p className='home-gallery-text-first'>Awesome fresh dishes</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-11 home-gallery-image-area">
                        <img className='home-gallery-image' src={Img2} alt="" />
                        <p className='home-gallery-text-second'>Sweet fruits</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-11 home-gallery-image-area">
                        <img className='home-gallery-image' src={Img3} alt="" />
                        <p className='home-gallery-text-third'>Tasty dinner</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HomeGallery
