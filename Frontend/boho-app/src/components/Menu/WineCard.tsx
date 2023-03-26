import React, { useState } from 'react'
import decorator from '../../assets/images/Home/orange-decorator.png'
function WineCard() {
    const [currentWine, setCurrentWine] = useState<number>(1)
    const onClick = (id: number) => {
        return () => {
            setCurrentWine(id);
        }
    }
    return (
        <section id='wine-card'>
            <div className='container device-computer'>
                <div className="row">
                    <div className="wine-card">
                        <div className='wine-card-label-area'>
                            <span className='wine-card-label'>Local Wines</span>
                        </div>

                        <div className="row">
                            <div className="wine-card-buttons">
                                <div className='wine-card-decorator-area me-3'>
                                    <img className='wine-card-decorator' src={decorator} alt="" />
                                </div>
                                <button onClick={onClick(1)} className='wine-card-button'>Red</button>
                                <button onClick={onClick(2)} className='wine-card-button wine-card-center-button'>White & Rose</button>
                                <button onClick={onClick(3)} className='wine-card-button'>Bar Menu</button>
                                <div className='wine-card-decorator-area me-3'>
                                    <img className='wine-card-decorator wine-card-decorator-right' src={decorator} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wine-card-content">
                                {
                                    currentWine === 1 && (
                                        <div className="row">
                                            <div className="red-ss-wines">
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Semi-sweet</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Prestige</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon, Madrasa</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Cabernet Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Cabernet Sauvignon, Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Aleatico</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Aleatico</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Madrasa, Saperavi</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Merlot.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='red-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Limited Release</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>40₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Alicante Bouschet, Grenache, Syrah</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Sangiovese</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Sangiovese</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Boho homemade wine</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>21₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi - Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Cuvee</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Syrah, Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Reserve</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Caucasus</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Saperavi, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Image</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Madrasa, Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Saperavi, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant Classic Line</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>38₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Makhmari</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Marseillan, Carignan, Grenache noir, Mourverde</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Syrah</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>32₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Syrah</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Petit Verdot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>36₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Petit verdot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Marjan</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Saperavi, Shirvanshahi, Madrasa, Khindogni</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Cabernet Sauvignon</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Syrah</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Syrah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Dessert</span>
                                                    </div>
                                                </div>

                                                <div className="row desert-wines ">
                                                    <div className="col-7">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>34₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Merlot</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                                {
                                    currentWine === 2 && (
                                        <div className="row">
                                            <div className='white-ss-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Semi-sweet</span>
                                                    </div>
                                                </div>

                                                <div className="row white-ss-wines">
                                                    <div className="col-7">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Rkatsteli, Mtzvane, Bayan Shira</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='white-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Chardonnay</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Chardonnay</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Pinot Grigio</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Pinot grigio</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Sauvignon blanc</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant Classic Line</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>38₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Bayan shira</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Bayan shira,Rkatsteli</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Viognier</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Viognier</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Riesling</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Riesling</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Sadaf</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Grenache Blanch, Roussane, Marsanne, Claritte</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>37₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Sauvignon Blanc</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Traminer</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast- Traminer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>26₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast- Sauvignon Blanc</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='white-semi-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Semi-dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Moscato</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Moscato</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Bayan Shira</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>26₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Bayan shira</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className='rose-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Rose</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Cabernet Sauvignon, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Pinot Noir, Blanc Moscato</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    )
                                }
                                {
                                    currentWine === 3 && (
                                        <div className="row">
                                            <div className="specials">
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Specials</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Sangria</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>22₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Sangria is a mixed alcoholic drink from Spain which contains fruit juice, sweeteners, sparkling water, lavored liqueurs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Mulled wine</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Mulled Wine, sometimes referred to as Spiced Wine, refers to wine, most often of a red variety, infused with various fruits and spices then served warm.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='prosecco'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Champagne & Prosecco</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Cinzano</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>50₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>An aromatic, dry sparkling wine made from white glera grapes specially selected from the best vineyards of the Colline Trevigiane region in Northern Italy. </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Bottega</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>46₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Il Vino dei Poeti Prosecco DOC is a Brut sparkling wine,  obtained by Glera grapes grown according to classic,  traditional techniques in the province of Treviso</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Acquesi</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>49₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Acquesi Asti Sparkling Wine is a white wine from Piedmont, Italy, made with Moscato grapes.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Astoria</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>49₼</p>
                                                        </div>

                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Acquesi Asti Sparkling Wine is a white wine from Piedmont, Italy, made with Moscato grapes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='cognacs'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Cognacs</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hennesy VS</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>11₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Matured in new oak barrels, Hennessy V.S is bold and fragrant. Its beguiling character is uniquely Hennessy, a timeless choice with an intensity all its own.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Gold Baku XO</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>9₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Cognac has golden-copper color, the bouquet is very complex with chocolate, vanilla, and honey tones perfectly combined with dried fruit aromas and long harmonious finish.</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>



                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container device-mobile'>
                <div className="row">
                    <div className="wine-card">
                        <div className='wine-card-label-area'>
                            <span className='wine-card-label'>Local Wines</span>
                        </div>

                        <div className="row">
                            <div className="wine-card-buttons">
                                <button onClick={onClick(1)} className='wine-card-button'>Red</button>
                                <button onClick={onClick(2)} className='wine-card-button wine-card-center-button'>White & Rose</button>
                                <button onClick={onClick(3)} className='wine-card-button'>Bar Menu</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="wine-card-content">
                                {
                                    currentWine === 1 && (
                                        <div className="row">
                                            <div className="red-ss-wines">
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Semi-sweet</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Prestige</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon, Madrasa</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Cabernet Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Cabernet Sauvignon, Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Aleatico</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Aleatico</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Madrasa, Saperavi</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Merlot.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='red-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Limited Release</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>40₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Alicante Bouschet, Grenache, Syrah</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Sangiovese</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Sangiovese</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Boho homemade wine</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>21₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi - Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Cuvee</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Syrah, Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Reserve</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Caucasus</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Saperavi, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Image</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Madrasa, Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Merlot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Merlot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Saperavi, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant Classic Line</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>38₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Makhmari</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Marseillan, Carignan, Grenache noir, Mourverde</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Syrah</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>32₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Syrah</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Petit Verdot</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>36₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Petit verdot</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Marjan</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Saperavi, Shirvanshahi, Madrasa, Khindogni</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Cabernet Sauvignon</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Syrah</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast - Syrah</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='dessert-wine-area'>
                                                <div>
                                                    <div className="row">
                                                        <div className="wine-label-area">
                                                            <span className='wine-label'>Dessert</span>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="desert-wines">
                                                            <div className='product-label' >
                                                                <p className='product-name'>Savalan</p>
                                                                <div className='menu-dash mt-2 mx-1'></div>
                                                                <p className='product-price'>34₼</p>
                                                            </div>
                                                            <div className='product-desc-area'>
                                                                <p className='product-desc'>ASPI Winery - Merlot</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    )
                                }
                                {
                                    currentWine === 2 && (
                                        <div className="row">
                                            <div className="white-ss-wines">                                                
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Semi-sweet</span>
                                                    </div>                                             
                                                <div className="col-12">
                                                    <div className='product-label' >
                                                        <p className='product-name'>Chabiant</p>
                                                        <div className='menu-dash mt-2 mx-1'></div>
                                                        <p className='product-price'>28₼</p>
                                                    </div>
                                                    <div className='product-desc-area'>
                                                        <p className='product-desc'>Ismayilli Winery - Rkatsteli, Mtzvane, Bayan Shira</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='white-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Chardonnay</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Chardonnay</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Pinot Grigio</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Pinot grigio</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Sauvignon blanc</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant Classic Line</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>38₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Bayan shira</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Bayan shira,Rkatsteli</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Viognier</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Viognier</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Riesling</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Riesling</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Meysari Sadaf</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>39₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Shamakhi Winery - Grenache Blanch, Roussane, Marsanne, Claritte</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>37₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Sauvignon Blanc</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Traminer</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>27₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast- Traminer</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Terra Leone Sauvignon Blanc</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>26₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Caspian Coast- Sauvignon Blanc</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='white-semi-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Semi-dry</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan Moscato</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Moscato</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside Bayan Shira</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>26₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Bayan shira</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className='rose-dry-wines'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Rose</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hillside</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>30₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ganja Winery - Cabernet Sauvignon</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Chabiant</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Ismayilli Winery - Cabernet Sauvignon, Madrasa</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Savalan</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>ASPI Winery - Pinot Noir, Blanc Moscato</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    )
                                }
                                {
                                    currentWine === 3 && (
                                        <div className="row">
                                            <div className="specials">
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <span className='wine-label'>Specials</span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Sangria</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>22₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Sangria is a mixed alcoholic drink from Spain which contains fruit juice, sweeteners, sparkling water, lavored liqueurs.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Mulled wine</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>28₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Mulled Wine, sometimes referred to as Spiced Wine, refers to wine, most often of a red variety, infused with various fruits and spices then served warm.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className='prosecco'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Champagne & Prosecco</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Cinzano</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>50₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>An aromatic, dry sparkling wine made from white glera grapes specially selected from the best vineyards of the Colline Trevigiane region in Northern Italy. </p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Bottega</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>46₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Il Vino dei Poeti Prosecco DOC is a Brut sparkling wine,  obtained by Glera grapes grown according to classic,  traditional techniques in the province of Treviso</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Acquesi</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>49₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Acquesi Asti Sparkling Wine is a white wine from Piedmont, Italy, made with Moscato grapes.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Astoria</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>49₼</p>
                                                        </div>

                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Acquesi Asti Sparkling Wine is a white wine from Piedmont, Italy, made with Moscato grapes.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='cognacs'>
                                                <div className="row">
                                                    <div className="wine-label-area">
                                                        <p className='wine-label'>Cognacs</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Hennesy VS</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>11₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Matured in new oak barrels, Hennessy V.S is bold and fragrant. Its beguiling character is uniquely Hennessy, a timeless choice with an intensity all its own.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className='product-label' >
                                                            <p className='product-name'>Gold Baku XO</p>
                                                            <div className='menu-dash mt-2 mx-1'></div>
                                                            <p className='product-price'>9₼</p>
                                                        </div>
                                                        <div className='product-desc-area'>
                                                            <p className='product-desc'>Cognac has golden-copper color, the bouquet is very complex with chocolate, vanilla, and honey tones perfectly combined with dried fruit aromas and long harmonious finish.</p>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>



                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WineCard
