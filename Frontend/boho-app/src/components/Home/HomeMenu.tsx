import React, { useState } from 'react'
import decorator from '../../assets/images/Home/orange-decorator.png'
function HomeMenu() {
    const [currentMenu, setCurrentMenu] = useState<number>(1)
    const onClick = (id: number) => {
        return () => {
            setCurrentMenu(id);
        }
    }
    return (
        <div className='home-menu mb-5'>
            <div className="container">
                <div className="row">
                    <div className='home-menu-header'>
                        <h1 className='home-menu-header-up'>THE BEST FOOD</h1>
                        <h1 className='home-menu-header-down'>AT THE BEST PRICE</h1>
                        <p className='home-menu-label'>Menu</p>
                    </div>
                </div>
                <div className="home-menu-buttons">
                    <div className='home-menu-decorator-area me-3'>
                        <img className='home-menu-decorator' src={decorator} alt="" />
                    </div>
                    <button className='home-menu-button me-4' onClick={onClick(1)}>Tea</button>
                    <button className='home-menu-button me-4' onClick={onClick(2)}>Dishes</button>
                    <button className='home-menu-button me-4' onClick={onClick(3)}>Wine</button>
                    <button className='home-menu-button' onClick={onClick(4)}>Appetizers</button>
                    <div className='home-menu-decorator-area ms-3'>
                        <img className='home-menu-decorator' src={decorator} alt="" />
                    </div>
                </div>
                <div className="home-menu-content mt-5">
                    {
                        currentMenu === 1 && (
                            <div className="row">
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Pu er an bao</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>8₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Post-fermented leaf tea, subjected to long and thorough processing. Puer tea got its name in honor of a provincial town in the southern part of the Chinese region of Yunnan.</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Assam meleng</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>7₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This classic full-bodied tea from the North of India features a strong and spicy flavor and comforting malty aroma.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Manon</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>7₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This blend of selected green teas, full of flower and exotic fruit fragrances, tastes exceptionally light and fresh with tropical sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Milk Oolong</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>10₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>A slightly fermented tea with leaves that are rolled in a special way into small curls. When brewed, it features the delicate flavor of tea with fresh milk.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Herbal temptation</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>6₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Aloe Vera and Goji berries enhance the wellness effect of this mild herbal infusion with its pleasantly harmonious taste and slight sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Essence of fruit</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>7₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Super fruits like blueberry, pomegranate and açai contain a high amount of antioxidants and have a soothing effect on body and mind.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    {
                        currentMenu === 2 && (
                            <div className="row">
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Beef salad</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>13₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Beef, lettuce, corns, charleston pepper, onion, pickels,pomegranade sauce</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Salmon w/ grilled vegetables</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>22₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This classic full-bodied tea from the North of India features a strong and spicy flavor and comforting malty aroma.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Fettuccini w/ bacon in cream sauce</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>11₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This blend of selected green teas, full of flower and exotic fruit fragrances, tastes exceptionally light and fresh with tropical sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Moroccon vegan salad</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>8.5₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Pea, broccoli, beetroot, green salad, carrot, sunflower seeds,tahin, cream sauce.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label'>
                                        <p className='product-name'>Beef in teriyaki sauce</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>17₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Aloe Vera and Goji berries enhance the wellness effect of this mild herbal infusion with its pleasantly harmonious taste and slight sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Chicken fillet in gorgonzola sauce</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>15₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Super fruits like blueberry, pomegranate and açai contain a high amount of antioxidants and have a soothing effect on body and mind.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        currentMenu === 3 && (
                            <div className="row">
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Terra Leone Merlot</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>28₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Post-fermented leaf tea, subjected to long and thorough processing. Puer tea got its name in honor of a provincial town in the southern part of the Chinese region of Yunnan.</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Savalan Limited Release</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>40₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This classic full-bodied tea from the North of India features a strong and spicy flavor and comforting malty aroma.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Savalan Petit Verdot</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>36₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This blend of selected green teas, full of flower and exotic fruit fragrances, tastes exceptionally light and fresh with tropical sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Meysari Sadaf</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>39₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>A slightly fermented tea with leaves that are rolled in a special way into small curls. When brewed, it features the delicate flavor of tea with fresh milk.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Hillside Sangiovese</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>30₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Aloe Vera and Goji berries enhance the wellness effect of this mild herbal infusion with its pleasantly harmonious taste and slight sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Heritage Sauvignon</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>32₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Super fruits like blueberry, pomegranate and açai contain a high amount of antioxidants and have a soothing effect on body and mind.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        currentMenu === 4 && (
                            <div className="row">
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Chicken pate</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>9₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Post-fermented leaf tea, subjected to long and thorough processing. Puer tea got its name in honor of a provincial town in the southern part of the Chinese region of Yunnan.</p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Bruschettas</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>11-14₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This classic full-bodied tea from the North of India features a strong and spicy flavor and comforting malty aroma.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Chesse plate</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>14₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>This blend of selected green teas, full of flower and exotic fruit fragrances, tastes exceptionally light and fresh with tropical sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Bavarian sausages</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>14₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>A slightly fermented tea with leaves that are rolled in a special way into small curls. When brewed, it features the delicate flavor of tea with fresh milk.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Hummus</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>9₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Aloe Vera and Goji berries enhance the wellness effect of this mild herbal infusion with its pleasantly harmonious taste and slight sweetness.</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className='product-label' >
                                        <p className='product-name'>Mixed wine set</p>
                                        <div className='menu-dash mt-2 mx-1'></div>
                                        <p className='product-price'>24₼</p>
                                    </div>
                                    <div className='product-desc-area'>
                                        <p className='product-desc'>Super fruits like blueberry, pomegranate and açai contain a high amount of antioxidants and have a soothing effect on body and mind.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default HomeMenu
