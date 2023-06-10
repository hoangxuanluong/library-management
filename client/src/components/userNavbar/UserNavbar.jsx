import React, { useContext } from 'react'
import './userNavbar.css'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'

function UserNavbar() {
  const { user, dispatch } = useContext(AuthContext)
  const quantity = useSelector((state) => state.cart.quantity)

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  return (
    <div className='userNavbar'>
      <div className='userNavbarWrapper'>
        <div className='userNavbarLeft'>
          <span className='language'>EN</span>
          <div className='userNavbarSearch'>
            <input
              className='userNavbarSearchInput'
              type='search'
              placeholder='search'
            />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </div>
        </div>
        <Link to='/user/home'>
          <div className='userNavbarCenter'>
            <h1 className='logo'>Bookshop</h1>
          </div>
        </Link>
        <div className='userNavbarRight'>
          {!user && (
            <Link to='/register'>
              <div className='navbarRightItem'>REGISTER</div>
            </Link>
          )}
          {!user && (
            <Link to='/login'>
              <div className='navbarRightItem'>SIGN IN</div>
            </Link>
          )}

          {user && (
            <div className='navbarRightItem' onClick={handleClick}>
              LOGOUT
            </div>
          )}
          <Link to='/user/order'>
            <div className='navbarRightItem'>ORDER</div>
          </Link>
          <Link to='/user/cart'>
            <div className='navbarRightItem'>
              <Badge badgeContent={quantity || 0} color='primary'>
                <ShoppingCartIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserNavbar
