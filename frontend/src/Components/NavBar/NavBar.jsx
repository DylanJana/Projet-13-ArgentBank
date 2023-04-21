import React from 'react'
import './NavBar.css'

// Import method to react-router-dom
import { Link } from 'react-router-dom'
// Import logo
import logo from '../../assets/img/argentBankLogo.webp'

export default function NavBar() {
  const connected = false
  return (
    <div className='ly--full-container'>
      <nav className="nav flex justify-content--space-between align-items--center">
        <Link to={"/"}>
          <img
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        {connected ? (
          <div className='nav-connected'>
            <Link className='nav__connect-link fw--700' to={'/user'}>
              <i className="fa fa-user-circle"></i>
              Tony
            </Link>
            <Link className='nav__connect-link fw--700' to={'/'}>
              <i className="fa fa-sign-out"></i>
              Sign out
            </Link>
          </div>
        ) : (
          <Link className='nav__connect-link fw--700' to={'/sign-in'}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </nav>
    </div>
  )
}
