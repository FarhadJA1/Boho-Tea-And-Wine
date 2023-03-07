import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function FruitTea() {
    return (
        <div className='container'>
            <div className="row fruit-tea">
                <div className="col-1 fruit-tea-label-area">
                    <h1 className='fruit-tea-label'>FRUIT TEA</h1>
                </div>

                <div className="col-6 fruit-tea-content">
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Manila mango</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>Sweet mangoes and juicy pineapple merge to result in a wonderful fruit infusion full of summer aromas and notes of creamy vanilla.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Wildcherry</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>A dark red fruit infusion with the expressive aroma of wild cherries, perfected by a slight dash of bitter almond.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Sicilian orange</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>The combination of sweet orange aroma, flowery nuances and the tropical briskness of passion fruit makes for a delicious fruit infusion.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Persian apple</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>A unique oriental drink with the taste of fresh sweet apples and a slight citric flavor. It features a light-yellow color when brewed.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Coco white</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>An unsual fruit infusion that combines cocktail ingredients like sweet ripe coconut and pineapple fruit with exotic spices like red pepper and star anise.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Sweet november</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>6₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>A winter’s dream of rose hip, spicy cinnamon and almond pieces. This dark red fruit infusion boasts with a fruity orange taste.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Kiwi colada</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>7₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>The exotic combination of juicy kiwi and pineapple with the freshness of ripe berries is reminiscent of tropical cocktail ambience.</p>
                        </div>
                    </div>
                    <div>
                        <div className='product-label'>
                            <p className='product-name'>Essence of fruit</p>
                            <div className='menu-dash mt-2 mx-1'></div>
                            <p className='product-price'>7₼</p>
                        </div>
                        <div className='product-desc-area'>
                            <p className='product-desc'>Super fruits like blueberry, pomegranate and açai contain a high amount of antioxidants and have a soothing effect on body and mind.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5 fruit-tea-image-area">
                    <img className='menu-image' src={Img} alt="" />
                    <div className='fruit-tea-image-frame'></div>
                </div>
            </div>
        </div>
    )
}

export default FruitTea
