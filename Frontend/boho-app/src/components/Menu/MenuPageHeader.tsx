import React from 'react'
import Decorator from '../../assets/images/Home/orange-decorator.png'
function MenuPageHeader() {
  return (
    <div className="container">
      <div className='menu-page-header'>
        <img className='menu-decorator' src={Decorator} alt="" />
        <h1>MENU</h1>
        <img className='menu-decorator menu-decorator-right' src={Decorator} alt="" />
      </div>
    </div>

  )
}

export default MenuPageHeader
