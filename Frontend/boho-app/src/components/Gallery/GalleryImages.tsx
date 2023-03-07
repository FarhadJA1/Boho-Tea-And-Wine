import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function GalleryImages() {
    return (
        <div className='container-fluid'>
            <div className="gallery-images">
                <div className="row photo-grid">
                    <div className="col-4 small-photos">
                        <div className="row small-photo">
                            <img src={Img} />
                        </div>
                        <div className="row small-photo">
                            <img src={Img} />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="row big-photo">
                            <img src={Img} />
                        </div>
                    </div>
                </div>
                <div className="row photo-grid">                    
                    <div className="col-8">
                        <div className="row big-photo">
                            <img src={Img} />
                        </div>
                    </div>
                    <div className="col-4 small-photos">
                        <div className="row small-photo">
                            <img src={Img} />
                        </div>
                        <div className="row small-photo">
                            <img src={Img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImages
