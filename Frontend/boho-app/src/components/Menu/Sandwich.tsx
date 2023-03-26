import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function Sandwich() {
    return (
        <section id='sandwiches'>
            <div className='container device-computer'>
                <div className="row sandwich">
                    <div className="col-lg-5 col-xl-5 col-sm-12 col-md-12 sandwich-image-area">
                        <img className='menu-image' src={Img} alt="" />
                        <div className='sandwich-image-frame'></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-11 col-md-11 sandwich-content">
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Chicken sandwich in ciabatta bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Chicken fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Mushroom sandwich in ciabatta bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Mushroom, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Bacon sandwich in baquette bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>10.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked bacon fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Turkey sandwich in baquette bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked turkey fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Salmon sandwich in croissant</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked salmon, cream cheese, cucumber, aragula.</p>
                            </div>
                        </div>


                        <div className='menu-desc-area'>
                            <span className='menu-desc'>*sandwiches are served with green salad.</span>
                        </div>
                    </div>
                    <div className="col-1 sandwich-label-area">
                        <h1 className='sandwich-label'>SANDWICHES</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid device-mobile'>
                <div className="row sandwich">
                    <div className="sandwich-label-area">
                        <h1 className='sandwich-label'>SANDWICHES</h1>
                    </div>
                    <div className="col-sm-12 col-md-12 sandwich-image-area">
                        <img className='menu-image' src={Img} alt="" />
                    </div>
                    <div className="sandwich-content">
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Chicken sandwich in ciabatta bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Chicken fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Mushroom sandwich in ciabatta bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Mushroom, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Bacon sandwich in baquette bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>10.5₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked bacon fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Turkey sandwich in baquette bread</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked turkey fillet, cucumber, tomato, lettuce, gouda cheese, homemade mayonnaise.</p>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div className='product-label'>
                                <p className='product-name'>Salmon sandwich in croissant</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>11₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Smoked salmon, cream cheese, cucumber, aragula.</p>
                            </div>
                        </div>
                        <div className='menu-desc-area'>
                            <span className='menu-desc'>*sandwiches are served with green salad.</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Sandwich
