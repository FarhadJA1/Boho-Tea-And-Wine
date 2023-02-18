import React from 'react'
import SaladImg from "../../assets/images/Home/salad (1).png";
import Tea from "../../assets/images/Home/tea-herbal.png";
import Sweets from "../../assets/images/Home/cheesecake.png";
import Glass from "../../assets/images/Home/wine-tasting.png";

function Highlights() {
    return (
        <div className='container'>
            <div className="row highlights">
                <div className="col-3">
                    <div className='highlights-icon-area'>
                        <img className='highlights-icon' src={SaladImg} alt="" />
                    </div>
                    <div>
                        <h4 className='highlights-text'>FRESH DISHES</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className='highlights-icon-area'>
                        <img className='highlights-icon' src={Glass} alt="" />
                    </div>
                    <div>
                        <h4 className='highlights-text'>LOCAL WINES</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className='highlights-icon-area'>
                        <img className='highlights-icon' src={Sweets} alt="" />
                    </div>
                    <div>
                        <h4 className='highlights-text'>SWEET DESERTS</h4>
                    </div>
                </div>
                <div className="col-3">
                    <div className='highlights-icon-area'>
                        <img className='highlights-icon' src={Tea} alt="" />
                    </div>
                    <div>
                        <h4 className='highlights-text'>VARIOUS TEAS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
