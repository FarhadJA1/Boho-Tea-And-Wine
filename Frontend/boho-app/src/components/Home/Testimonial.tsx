import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from "react";
import { Pagination } from "swiper";
import TestimonialPhoto from '../../assets/images/Home/testimonial_img_1.png'
import 'swiper/css';
import "swiper/css/pagination";
function Testimonial() {
    return (
        <div className='container'>
            <div className="row mt-5 testimonial">
                <div className="col-6 testimonial-content">
                    <div className="row">
                        <div className="col-1"><p className='testimonial-comma'>"</p></div>
                        <div className="col-11">
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={1}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
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
                <div className="col-6">
                    <img src={TestimonialPhoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
