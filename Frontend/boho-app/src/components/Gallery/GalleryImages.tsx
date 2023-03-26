import React from 'react'
import Img from '../../assets/images/Menu/menu-image.jpg'
function GalleryImages() {
    return (
        <div className='container-fluid mt-5'>
            <div className="gallery-images ">
                <div className="row photo-grid photo-grid-up">
                    <div className="small-photos small-photos-up">
                        <div className="small-photo">
                            <img src={Img} />
                        </div>
                        <div className="small-photo">
                            <img src={Img} />
                        </div>
                    </div>


                    <div className="big-photo">
                        <img src={Img} />
                    </div>


                </div>
                <div className="row photo-grid">
                    <div className="big-photo">
                        <img src={Img} />
                    </div>

                    <div className="small-photos">
                        <div className="small-photo">
                            <img src={Img} />
                        </div>
                        <div className="small-photo">
                            <img src={Img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryImages
