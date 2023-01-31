import React from 'react'
import '../assets/style/Home/home.css'
import Highlights from '../components/Home/Highlights'
import HomeAbout from '../components/Home/HomeAbout'
import HomeGallery from '../components/Home/HomeGallery'
import HomeMenu from '../components/Home/HomeMenu'
import Opening from '../components/Home/Opening'
import Since from '../components/Home/Since'
import TabMenu from '../components/Home/TabMenu'
import Testimonial from '../components/Home/Testimonial'



function Home() {
  return (
    <div>
      <TabMenu/>
      <HomeAbout/>
      <Since/>
      <Opening/>
      <Highlights/>
      <HomeMenu/>
      <HomeGallery/>
      <Testimonial/>
    </div>
  )
}

export default Home
