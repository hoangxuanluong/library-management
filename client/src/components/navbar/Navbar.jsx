import React, { useContext } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Navbar() {
  const { user } = useContext(AuthContext)
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <Link to='/dashboard' style={{ textDecoration: 'none' }}>
            <li className='topListItem'>HOME</li>
          </Link>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
        </ul>
      </div>
      <div className='topRight'>
        {!user && (
          <>
            <ul className='topList'>
              {/* <li className='topListItem'>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                  Register
                </Link>
              </li> */}
              <li className='topListItem'>
                <Link to='/login' style={{ textDecoration: 'none' }}>
                  LOGIN
                </Link>
              </li>
            </ul>
            <i className='topSearchIcon fas fa-search'></i>
          </>
        )}
      </div>
    </div>
  )
}
