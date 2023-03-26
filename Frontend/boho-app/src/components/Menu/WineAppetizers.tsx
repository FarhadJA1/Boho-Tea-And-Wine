import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function WineAppetizers() {
    return (
        <section id='appetizers'>
            <div className='container device-computer'>
                <div className="row appetizers">
                    <div className="col-lg-5 col-xl-5 col-sm-12 col-md-12 appetizer-image-area">
                        <img className='menu-image' src={Img} alt="" />
                        <div className='appetizer-image-frame'></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-sm-11 col-md-11 appetizers-content">
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Cheese plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Gouda, white cheese, cheddar, parmesan, blue cheese, galetas and honey.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Hummus (classic / red)</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>8₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Two types of hummus. Served with carrot, cucumber and toasted bread.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Fruit plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Seasonal fruits.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Meat plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>15₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Various of smoked and dried meat.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Mixed wine set</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>24₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Mix of cheese, meat, fruit and olives.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Fresh chicken pate in special caramel-lemon sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Served with carrot, cucumber and toasted bread.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Grilled bavarian sausages in </p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-1 appetizers-label-area">
                        <h1 className='appetizers-label'>APPETIZERS</h1>
                    </div>
                </div>
            </div>
            <div className='container-fluid device-mobile'>
                <div className="row appetizers">
                    <div className="appetizers-label-area">
                        <h1 className='appetizers-label'>APPETIZERS</h1>
                    </div>
                    <div className="col-sm-12 col-md-12 appetizer-image-area">
                        <img className='menu-image' src={Img} alt="" />                        
                    </div>
                    <div className="appetizers-content">
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Cheese plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Gouda, white cheese, cheddar, parmesan, blue cheese, galetas and honey.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Hummus (classic / red)</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>8₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Two types of hummus. Served with carrot, cucumber and toasted bread.</p>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <div className='product-label'>
                                <p className='product-name'>Fruit plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                           
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Meat plate</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>15₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Various of smoked and dried meat.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Mixed wine set</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>24₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Mix of cheese, meat, fruit and olives.</p>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='product-label'>
                                <p className='product-name'>Fresh chicken pate in special caramel-lemon sauce</p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>9₼</p>
                            </div>
                            <div className='product-desc-area'>
                                <p className='product-desc'>Served with carrot, cucumber and toasted bread.</p>
                            </div>
                        </div>
                        <div>
                            <div className='product-label'>
                                <p className='product-name'>Grilled bavarian sausages in </p>
                                <div className='menu-dash mt-2 mx-1'></div>
                                <p className='product-price'>14₼</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

    )
}

export default WineAppetizers
