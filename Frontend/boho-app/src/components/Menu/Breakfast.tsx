import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function Breakfast() {
    return (
        <section id='breakfasts'>
            <div className='container device-computer'>
                <div className="row breakfast">
                    <div className="col-lg-5 col-xl-5 breakfast-image-area">
                        <img className='menu-image' src={Img} alt="" />
                        <div className='breakfast-image-frame'></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-11 col-md-11 breakfast-content">
                        <div className='product-label'>
                            <p className='product-name'>Tomato-omelette with gauda cheese</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Cheese omelette</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Omelette with bacon and spinach</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>7.5₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Egg benedict with smoked beef</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>9₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Kuku with two cheese</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Avocado toast with pochet egg</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>9₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Croissant sandwich with smoked salmon</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>11₼</p>
                        </div>
                        <div className='menu-desc-area'>
                            <span className='menu-desc'>*breakfasts are served until 15:00.</span>
                        </div>
                    </div>
                    <div className="col-1 breakfast-label-area">
                        <h1 className='breakfast-label'>BREAKFASTS</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid device-mobile'>
                <div className="breakfast">
                    <div className="breakfast-label-area">
                        <h1 className='breakfast-label'>BREAKFASTS</h1>
                    </div>
                    <div className="breakfast-image-area">
                        <img className='menu-image' src={Img} alt="" />                        
                    </div>
                    <div className="breakfast-content">
                        <div className='product-label'>
                            <p className='product-name'>Tomato-omelette with gauda cheese</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Cheese omelette</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Omelette with bacon and spinach</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>7.5₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Egg benedict with smoked beef</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>9₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Kuku with two cheese</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Avocado toast with pochet egg</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>9₼</p>
                        </div>
                        <div className='product-label'>
                            <p className='product-name'>Croissant sandwich with smoked salmon</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>11₼</p>
                        </div>
                        <div className='menu-desc-area'>
                            <span className='menu-desc'>*breakfasts are served until 15:00.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Breakfast
