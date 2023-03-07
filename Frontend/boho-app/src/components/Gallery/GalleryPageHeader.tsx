import React from 'react'
import Decorator from '../../assets/images/Home/orange-decorator.png'
function GalleryPageHeader() {
    return (
        <div className="container">
            <div className='gallery-page-header'>
                <img className='gallery-decorator' src={Decorator} alt="" />
                <h1>GALLERY</h1>
                <img className='gallery-decorator gallery-decorator-right' src={Decorator} alt="" />
            </div>
        </div>
    )
}

export default GalleryPageHeader
