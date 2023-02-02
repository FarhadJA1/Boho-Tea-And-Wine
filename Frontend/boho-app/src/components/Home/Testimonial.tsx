import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";
import SwiperCore,{ Pagination,Autoplay } from "swiper";
import TestimonialPhoto from '../../assets/images/Home/testimonial_img_1.png'
import 'swiper/css';
import "swiper/css/pagination";
function Testimonial() {
    SwiperCore.use([Autoplay]);
    return (
        <div className='container'>
            <div className="row mt-5 testimonial">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 testimonial-content">
                    <div className="row">
                        <div className="col-1"><p className='testimonial-comma'>"</p></div>
                        <div className="col-11">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{
                                    dynamicBullets: true,
                                    clickable:true
                                }}
                                modules={[Pagination]}
                                autoplay={{
                                    delay:5000,
                                    disableOnInteraction: false
                                }}
                            >
                                <SwiperSlide>
                                    <p className='testimonial-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae suscipit voluptates id optio veniam ea deleniti vitae, quaerat eligendi nemo reprehenderit praesentium quibusdam dolorem libero laboriosam culpa, tempore molestiae accusamus quas doloremque consequatur. Nam, dicta. Animi expedita excepturi sequi!</p>
                                    <p className='testimonial-text-writer'>Ömər Xəyyam</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p className='testimonial-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae suscipit voluptates id optio veniam ea deleniti vitae, quaerat eligendi nemo reprehenderit praesentium quibusdam dolorem libero laboriosam culpa, tempore molestiae accusamus quas doloremque consequatur. Nam, dicta. Animi expedita excepturi sequi!</p>
                                    <p className='testimonial-text-writer'>Adam Miller</p>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <p className='testimonial-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae suscipit voluptates id optio veniam ea deleniti vitae, quaerat eligendi nemo reprehenderit praesentium quibusdam dolorem libero laboriosam culpa, tempore molestiae accusamus quas doloremque consequatur. Nam, dicta. Animi expedita excepturi sequi!</p>
                                    <p className='testimonial-text-writer'>Adam Miller</p>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <img className='testimonial-image' src={TestimonialPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
