import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from './Navigation';
function Main() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default Main
