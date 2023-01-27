import React from 'react'
import '../assets/style/Home/home.css'
import HomeAbout from '../components/Home/HomeAbout'
import TabMenu from '../components/Home/TabMenu'



function Home() {
  return (
    <div>
      <TabMenu/>
      <HomeAbout/>
    </div>
  )
}

export default Home
