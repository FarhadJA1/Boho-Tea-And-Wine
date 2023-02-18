import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function HerbalTea() {
    return (
        <div className='container'>
            <div className="row herbal-tea">
                <div className="col-5">
                    <img className='menu-image' src={Img} alt="" />
                </div>
                <div className="col-6 herbal-tea-content">
                    <div className='product-label'>
                        <p className='product-name'>Wellness cup</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>5₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>A wonderful wellness drink! This delicious infusion combines the briskness of many invigorating herbs and features a sweet taste of honey and flowers.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Ginseng valley</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>A herbal infusion with a spicy tang. This blend comes as a smooth and refreshing wellness tea with a unique blend of exotic herbs and ginseng.</p>
                    </div>                    
                   
                    <div className='product-label'>
                        <p className='product-name'>French rose</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>5₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Wonderful rosebuds create the subtle fine flavor and the soft emerald color of this tea. Leave a few buds in your brewed cup to create a decorative effect.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Ginger breeze</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>This ayurvedic herbal blend of citrus peel, lemongrass as well as the slight tang of ginger and pepper has an energizing and refreshing effect.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Herbal temptation</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Aloe Vera and Goji berries enhance the wellness effect of this mild herbal infusion with its pleasantly harmonious taste and slight sweetness.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Rooibush strawberry cream</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>Sweet strawberry flavor and fresh cream refine this rooibush blend from South Africa with a unique tender berry bouquet.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Rooibush cream caramel</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>A smooth rooibush blend that combines the soft natural rooibush flavor with the sweetness of caramel and macadamia nuts.</p>
                    </div>
                    <div className='product-label'>
                        <p className='product-name'>Rooibush sweet orange</p>
                        <div className='menu-dash mt-2 mx-1'></div>
                        <p className='product-price'>6₼</p>
                    </div>
                    <div className='product-desc-area'>
                        <p className='product-desc'>A refreshing rooibush blend with the sweet aroma of ripe oranges. It tastes very fruity with the characteristic richness of its rooibush base.</p>
                    </div>
                </div>
                <div className="col-1 herbal-tea-label-area">
                    <h1 className='herbal-tea-label'>HERBAL TEA</h1>
                </div>
            </div>
        </div>
    )
}

export default HerbalTea
