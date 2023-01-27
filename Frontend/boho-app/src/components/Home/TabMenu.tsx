import React, { MouseEventHandler, useState } from 'react'
import Img1 from '../../assets/images/Home/about04.jpg'
import Img2 from '../../assets/images/Home/about05.jpg'
import Img3 from '../../assets/images/Home/about06.jpg'
function TabMenu() {
    const [currentTab, setCurrentTab] = useState<number>(1)    
    const onClick = (id: number) => {        
        return () => {
            setCurrentTab(id);            
        }
    }
    

    return (
        <div className='tab-menu mt-5'>
            <div className="container">
                <div className="row">
                    <div className='tab-menu'>
                        <div className='tab-menu-contents'>
                            {
                                currentTab === 1 && (
                                    <div className='tab-menu-content'>
                                        <h2 className='first-tab-menu-content-header'>Welcome To</h2>
                                        <h3 className='first-tab-menu-content-footer'>Boho Tea & Wine Room</h3>
                                        <img  src={Img1} alt="" />
                                        <div className='photo-frame'></div>
                                    </div>
                                )
                            }
                            {
                                currentTab === 2 && (
                                    <div className='tab-menu-content'>
                                        <h2 className='second-tab-menu-content-header'>Taste Exclusively</h2>
                                        <h3 className='second-tab-menu-content-footer'>Exclusive dishes, cosy atmosphere and more...</h3>
                                        <img width={'450px'} height={'700px'} src={Img2} alt="" />
                                        <div className='photo-frame'></div>
                                    </div>
                                )
                            }
                            {
                                currentTab === 3 && (
                                    <div className='tab-menu-content'>
                                        <h2 className='third-tab-menu-content-header'>Delightful Experience</h2>
                                        <h3 className='third-tab-menu-content-footer'>Flavors inspired by the seasons</h3>
                                        <img width={'450px'} height={'700px'} src={Img3} alt="" />
                                        <div className='photo-frame'></div>
                                    </div>
                                )
                            }

                        </div>
                        <div className='tab-menu-buttons'>                            
                            <div onClick={onClick(1)} className='tab-menu-button'></div>
                            <div onClick={onClick(2)} className='tab-menu-button'></div>
                            <div onClick={onClick(3)} className='tab-menu-button'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabMenu
