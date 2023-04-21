import React, {useEffect, useState} from 'react'
import './NavBar.css'

// Import method to react-router-dom
import { Link } from 'react-router-dom'

// Import logo
import logo from '../../assets/img/argentBankLogo.webp'

// Import essentiels hooks of react-redux
import { useDispatch, useSelector } from 'react-redux'
// Import actions reducer
import { userDisconnected } from '../../redux/userReducer/userReducer'

export default function NavBar() {
  const [connected, setConnected] = useState(false)
  const {firstName, userConnected} = useSelector((state) => state.userInfos)
  const dispatch = useDispatch()

  const handleDisconnect = () => {
    console.log("DISCONNECT")
    dispatch(userDisconnected())
  }

  useEffect(() => {
    setConnected(userConnected);
  }, [userConnected]);

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
              {firstName}
            </Link>
            <Link className='nav__connect-link fw--700' to={'/'} onClick={handleDisconnect}>
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
