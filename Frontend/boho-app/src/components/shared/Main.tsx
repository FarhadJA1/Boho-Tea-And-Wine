import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Navigation from './Navigation';
function Main() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
