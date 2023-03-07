import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/style/shared/navigation/navigation.css'
import BohoLogo from '../../assets/images/boho new logo.png'
import ClickAwayListener from '@mui/base/ClickAwayListener'

function Navigation() {  
  const [isChecked, setChecked] = useState(false); 
  const handleClickAway = () => {
    setChecked(false);
  };
  return (
    <header id=''>
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
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="nav-menu-mobile row">
            <div className='col-lg-2 col-md-2 col-sm-2 nav-menu-part part-left'>
              <Link to={'/'}>
                <img className='logo-mobile' src={BohoLogo} alt="" />
              </Link>
            </div>
            <div className='col-lg-10 col-md-10 col-sm-2 nav-menu-part part-right mt-4'>
              <nav role="navigation">
                <div id="menuToggle">
                  <input className='mobile-menu-icon' type="checkbox" checked={isChecked} onChange={e => { setChecked(!isChecked) }} />
                  <span></span>
                  <span></span>
                  <span></span>
                  <ul id='menu'>
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
              </nav>

            </div>

          </div>
        </ClickAwayListener>



      </div>
    </header>
  )
}

export default Navigation