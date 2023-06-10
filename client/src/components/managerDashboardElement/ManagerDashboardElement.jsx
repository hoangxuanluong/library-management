import React, { useEffect, useState } from 'react'
import './managerDashboardElement.css'
import PersonIcon from '@mui/icons-material/Person'
import BrunchDiningIcon from '@mui/icons-material/BrunchDining'
import PaymentIcon from '@mui/icons-material/Payment'
import { Link } from 'react-router-dom'

export default function ManagerDashboardElement(props) {
  const [link, setLink] = useState()
  useEffect(() => {
    if (props.title === 'Users') {
      setLink('/users')
    } else if (props.title === 'foods') {
      setLink('/foods')
    } else {
      setLink('/orders')
    }
  }, [props.title])
  return (
    <>
      <div className='dashboardElement'>
        <div className='left'>
          <span className='dashboardElementTitle'>{props.title}</span>
          <span className='dashboardElementCount'>{props.numberCount}</span>
          <Link to={link} style={{ textDecoration: 'none' }}>
            <span className='dashboardElementLink'>View All {props.title}</span>
          </Link>
        </div>
        <div className='right'>
          {props.title === 'Users' && (
            <div className='dashboardElementIcon'>
              <PersonIcon className='userIcon' />
            </div>
          )}
          {props.title === 'Orders' && (
            <div className='dashboardElementIcon'>
              <PaymentIcon className='orderIcon' />
            </div>
          )}
          {props.title === 'Foods' && (
            <div className='dashboardElementIcon'>
              <BrunchDiningIcon className='foodIcon' />
            </div>
          )}
        </div>
      </div>
    </>
  )
}
