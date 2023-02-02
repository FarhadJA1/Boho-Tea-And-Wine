import React, { useEffect } from 'react'
import '../assets/style/Home/home.css'
import Highlights from '../components/Home/Highlights'
import HomeAbout from '../components/Home/HomeAbout'
import HomeGallery from '../components/Home/HomeGallery'
import HomeMenu from '../components/Home/HomeMenu'
import Opening from '../components/Home/Opening'
import Since from '../components/Home/Since'
import TabMenu from '../components/Home/TabMenu'
import Testimonial from '../components/Home/Testimonial'
import UpButton from '../components/shared/UpButton'

function Home() {
  let btn: any = null;
  useEffect(() => {
    btn = document.querySelector('.up-button');
    window.addEventListener('scroll', function () {
      if (this.window.scrollY > 100) {
        btn?.classList.add('active');
      }
      else {
        btn?.classList.remove('active');
      }
    })
  },[])

  
  return (
    <div>
      <TabMenu />
      <HomeAbout />
      <Since />
      <Opening />
      <Highlights />
      <HomeMenu />
      <HomeGallery />
      <Testimonial />
      <UpButton />
    </div>
  )
}

export default Home
