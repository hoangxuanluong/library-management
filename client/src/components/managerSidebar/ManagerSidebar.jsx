import React, { useContext } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import CallToActionIcon from '@mui/icons-material/CallToAction'
import InventoryIcon from '@mui/icons-material/Inventory'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import LogoutIcon from '@mui/icons-material/Logout'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import './managerSidebar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function ManagerSidebar() {
  const { user, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  return (
    <div className='managerSidebar'>
      <div className='managerSidebarTop'>
        <Link className='link' to='/admin/dashboard'>
          <div className='managerSidebarElement'>
            <DashboardIcon className='elementIcon' />
            <span className='sidebarElementTitle'>Dashboard</span>
          </div>
        </Link>
        {user.position === 'manager' && (
          <Link className='link' to='/admin/users'>
            <div className='managerSidebarElement'>
              <SupervisorAccountIcon className='elementIcon' />
              <span className='sidebarElementTitle'>Manage Users</span>
            </div>
          </Link>
        )}
        <Link className='link' to='/admin/books'>
          <div className='managerSidebarElement'>
            <LibraryBooksIcon className='elementIcon' />
            <span className='sidebarElementTitle'>Manage Books</span>
          </div>
        </Link>
        <Link className='link' to='/admin/addOrder'>
          <div className='managerSidebarElement'>
            <InventoryIcon className='elementIcon' />
            <span className='sidebarElementTitle'>Create Order</span>
          </div>
        </Link>
        <Link className='link' to='/admin/orders'>
          <div className='managerSidebarElement'>
            <CallToActionIcon className='elementIcon' />
            <span className='sidebarElementTitle'>Manage Order</span>
          </div>
        </Link>
        {user.position === 'manager' && (
          <Link className='link' to='/admin/viewReport'>
            <div className='managerSidebarElement'>
              <ShowChartIcon className='elementIcon' />
              <span className='sidebarElementTitle'>View report</span>
            </div>
          </Link>
        )}
      </div>
      <div className='managerSidebarBottom'>
        <div className='managerSidebarElement'>
          <AccountCircleIcon className='elementIcon' />
          <span className='sidebarElementTitle'>Account Settings</span>
        </div>
        <div className='managerSidebarElement' onClick={handleClick}>
          <LogoutIcon className='elementIcon' />
          <span className='sidebarElementTitle'>Logout</span>
        </div>
      </div>
    </div>
  )
}
