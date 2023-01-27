import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/shared/navigation/navigation.css'
import BohoLogo from '../../assets/images/boho new logo.png'

function Navigation() {
  return (
    <div className="container-fluid">
      <div className="nav-menu row">
        <div className='col-lg-2 col-md-2 nav-menu-part part-left'>
          <Link to={'/'}>
            <img className='logo' src={BohoLogo} alt="" />
          </Link>

        </div>
        <div className='col-lg-10 col-md-10 nav-menu-part part-right mt-4'>

          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/menu'}>Menu</Link>
            </li>
            <li>
              <Link to={'gallery'}>Gallery</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>

   



  )
}

export default Navigation