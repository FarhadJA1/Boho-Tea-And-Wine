import React from 'react'
import Decorator from '../../assets/images/Home/orange-decorator.png'
function Bruschetta() {
    return (
        <div className="bruschetta-area">
            <div className="container">
                <div className="row">
                    <div className='bruschetta'>
                        <span className='bruschetta-label'>Bruschettas</span>
                        <div className="row bruschetta-types">
                            <div className="col-4 bruschetta-product-area">
                                <div className='bruschetta-types-title'>
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                    <span className='bruschetta-title'>With meat</span>
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                </div>
                                <div className="row">
                                    <ul className='with-meet bruschetta-products'>
                                        <li>
                                            <span>- </span>
                                            <span>with smoked salmon</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with smoked bacon</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with butter fried shrimps</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with tuna</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with salami</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row bruschetta-prices-area">
                                    <span className='bruschetta-price'>* 3 pieces for 11 azn</span>
                                    <span className='bruschetta-price'>* 5 pieces for 14 azn</span>
                                </div>
                            </div>
                            <div className="col-4 bruschetta-product-area">
                                <div className="bruschetta-types-title">
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                    <p className='bruschetta-title'>Vegetarian</p>
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                </div>
                                <div className="row">
                                    <ul className='with-meet bruschetta-products'>
                                        <li>
                                            <span>- </span>
                                            <span>classic (tomato,white cheese, pesto)</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with avocado and cream cheese</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with hummus</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with mushroom and spinach in cream sauce</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with sun-dried tomatoes in olive oil</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with broccoli and cheddar</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row bruschetta-prices-area">
                                    <span className='bruschetta-price'>* 3 pieces for 8 azn</span>
                                    <span className='bruschetta-price'>* 5 pieces for 11 azn</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="bruschetta-types-title">
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                    <p className='bruschetta-title'>Salted caramel</p>
                                    <img className='menu-decorator' src={Decorator} alt="" />
                                </div>
                                <div className="row">
                                    <ul className='with-meet bruschetta-products'>
                                        <li>
                                            <span>- </span>
                                            <span>with peanut butter and apple</span>
                                        </li>
                                        <li>
                                            <span>- </span>
                                            <span>with cream cheese, grapes, almond and honey</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row bruschetta-prices-area">
                                    <span className='bruschetta-price'>* 3 pieces for 8 azn</span>
                                    <span className='bruschetta-price'>* 5 pieces for 11 azn</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>


    )
}

export default Bruschetta
