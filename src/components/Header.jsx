import React from 'react'
import { navItemsData } from '../Database'
import Logo from './Logo'
import { toggleSwitcher } from './StyleSwitcher'

const NavItemLink = ({ item: { href, text, isActive } }) => {
  return (
    <li className='nav-item'>
      <a className={isActive ? 'nav-link active' : 'nav-link'} href={href}>
        {text}
      </a>
    </li>
  )
}

export default function Header() {
  const navItemsLink = navItemsData

  return (
    <header className='header fixed-top'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Logo />

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto'>
              {navItemsLink.map((item, index) => {
                return <NavItemLink item={item} key={index} />
              })}

              {/* Settings Icon */}
              <li className='nav-item' onClick={toggleSwitcher}>
                <a className='nav-link' href='#home'>
                  <i className='fas fa-cog'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
