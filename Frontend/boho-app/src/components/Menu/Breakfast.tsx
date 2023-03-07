import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function Breakfast() {
    return (
        <div className='container'>
            <div className="row breakfast">
                <div className="col-5 breakfast-image-area">
                    <img className='menu-image' src={Img} alt="" />
                    <div className='breakfast-image-frame'></div>
                </div>
                <div className="col-6 breakfast-content">
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
    )
}

export default Breakfast
