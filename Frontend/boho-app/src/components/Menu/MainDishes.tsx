import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function MainDishes() {
    return (
        <section id='main-dishes'>
            <div className='container device-computer'>
                <div className="row main-dishes">
                    <div className="col-1 main-dishes-label-area">
                        <h1 className='main-dishes-label'>MAIN DISHES</h1>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-11 col-md-11 main-dishes-content">
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Chicken fillet in spinach and gorgonzola sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>15₼</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Grilled fresh salmon with vegetables in special lemon sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>22₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Served with pomegranate sauce.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Fettuccini with bacon in cream sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Vegetarian pasta in cream sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>10.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>With broccoli, mushroom, black olives.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Beef tenderloin in teriyaki sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>17₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>With special potato puree and green salad.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-5 col-xl-5 col-sm-12 col-md-12 main-dishes-image-area">
                        <img className='menu-image' src={Img} alt="" />
                        <div className='main-dishes-image-frame'></div>
                    </div>
                </div>
            </div>
            <div className='container-fluid device-mobile'>
            <div className="row main-dishes">
                    <div className="main-dishes-label-area">
                        <h1 className='main-dishes-label'>MAIN DISHES</h1>
                    </div>
                    <div className="main-dishes-image-area">
                        <img className='menu-image' src={Img} alt="" />                        
                    </div>
                    <div className="col-sm-12 col-md-12 main-dishes-content">
                        <div className='mb-4'>
                            <div className='product-label '>
                                <p className='product-name'>Chicken fillet in spinach and gorgonzola sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>15₼</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Grilled fresh salmon with vegetables in special lemon sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>22₼</p>
                            </div>
                            <div className='product-desc-area mb-2'>
                                <p className='product-desc '>Served with pomegranate sauce.</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='product-label mb-2'>
                                <p className='product-name'>Fettuccini with bacon in cream sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='product-label'>
                                <p className='product-name'>Vegetarian pasta in cream sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>10.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>With broccoli, mushroom, black olives.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Beef tenderloin in teriyaki sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>17₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>With special potato puree and green salad.</p>
                            </div>
                        </div>

                    </div>
                   
                </div>
            </div>
        </section>

    )
}

export default MainDishes
