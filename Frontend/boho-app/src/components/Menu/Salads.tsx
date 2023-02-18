import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function Salads() {
    return (
        <div className='container'>
            <div className="row salads">                
                <div className="col-1 salads-label-area">
                    <h1 className='salads-label'>SALADS</h1>
                </div>
                <div className="col-6 salads-content">
                    <div className='product-label'>
                        <p className='product-name'>Greek salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>7₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Tomato, cucumber, bell pepper, red onion, feta cheese, olives.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Moroccon vegan salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>8.5₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Peas, broccoli, beetroot, green salad, carrot, sunflower seeds, sauce with tahini and cream.</p>
                    </div>
                   
                    <div className='product-label'>
                        <p className='product-name'>Asian chicken salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>11₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Lettuce, chicken fillet, apple, bell pepper, carrot, red cabbage, pomegranade sauce.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Tuna salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>11₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Tuna, lettuce, corns, cucumber, coriander, charlestone pepper, olives, red onion.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Beef salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>13₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Beef tenderloin, lettuce, corns, bell pepper, red onion, picked cucumber, pomegranade sauce.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Falafel salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>9₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Green salad, field pumpkin, homemade falafel, peas, white sauce with tahini.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Raw vegan salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>7₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>A salad prepared from fresh seasonal vegetables and special sauce.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Shrimp salad</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>15₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Fried in butter shrimps, aragula, cherry tomato, corns, cucumber, red onion, red cabbage, mustard salad, almond.</p>
                    </div>
                </div>
                <div className="col-5">
                    <img className='menu-image' src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Salads
