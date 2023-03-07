import React from 'react'
import '../assets/style/Menu/menu.css'
import BlackTea from '../components/Menu/BlackTea'
import Breakfast from '../components/Menu/Breakfast'
import Bruschetta from '../components/Menu/Bruschetta'
import FruitTea from '../components/Menu/FruitTea'
import GreenTea from '../components/Menu/GreenTea'
import HerbalTea from '../components/Menu/HerbalTea'
import MainDishes from '../components/Menu/MainDishes'
import MenuPageHeader from '../components/Menu/MenuPageHeader'
import Salads from '../components/Menu/Salads'
import Sandwich from '../components/Menu/Sandwich'
import WineAppetizers from '../components/Menu/WineAppetizers'
import WineCard from '../components/Menu/WineCard'
function Menu() {
  return (
    <div className='menu-page'>
       <MenuPageHeader/>
       <BlackTea/>
       <GreenTea/>
       <HerbalTea/>
       <FruitTea/>
       <Breakfast/>
       <Salads/>
       <Sandwich/>
       <MainDishes/>
       <WineAppetizers/>
       <Bruschetta/>
       <WineCard/>
    </div>
  )
}

export default Menu
