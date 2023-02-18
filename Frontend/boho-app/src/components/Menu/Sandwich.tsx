import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function Sandwich() {
    return (
        <div className='container'>
            <div className="row sandwich">
                <div className="col-5">
                    <img className='menu-image' src={Img} alt="" />
                </div>
                <div className="col-6 sandwich-content">
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
    )
}

export default Sandwich
