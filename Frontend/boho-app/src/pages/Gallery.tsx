import React from 'react'
import '../assets/style/Gallery/gallery.css'
import GalleryImages from '../components/Gallery/GalleryImages'
import GalleryPageHeader from '../components/Gallery/GalleryPageHeader'
function Gallery() {
  return (
    <div className='gallery'>
      <GalleryPageHeader/>
      <GalleryImages/>
    </div>
  )
}

export default Gallery
