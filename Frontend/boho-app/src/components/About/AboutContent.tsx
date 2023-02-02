import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import Photo1 from '../../assets/images/About/about01.jpg'
import Photo2 from '../../assets/images/About/about02.jpg'
import Photo3 from '../../assets/images/About/about03.jpg'
import 'swiper/css';

function AboutContent() {
    SwiperCore.use([Autoplay]);
    return (
        <div className='container about-content'>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-content-texts">
                    <div>
                        <p>The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword</p>

                        <p>According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in Boulanger dates back to a history of food seminar in Paris in the mid-1990s</p>
                    </div>

                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 about-page-slider">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}

                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide>
                            <img className='about-page-image' src={Photo1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='about-page-image' src={Photo2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='about-page-image' src={Photo3} alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
