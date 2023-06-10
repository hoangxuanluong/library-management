import React, { useEffect, useState } from 'react'
import './managerDashboard.css'
import axios from 'axios'
import ManagerDashboardElement from '../managerDashboardElement/ManagerDashboardElement'

export default function ManagerDashboard() {
  const [userCount, setUserCount] = useState([])
  const [foodCount, setFoodCount] = useState([])
  const [orderCount, setOrderCount] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await axios.get('/api/user')
        setUserCount(users.data.length)
        const foods = await axios.get('/api/foods')
        setFoodCount(foods.data.length)
        const orders = await axios.get('/api/orders?status=unpaid')
        setOrderCount(orders.data.length)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className='managerDashboard'>
        <div className='managerDashboardWrapper'>
          <div className='dashboardTitle'>Dashboard:</div>
          <div className='dashboardContent'>
            <ManagerDashboardElement title='Foods' numberCount={foodCount} />
            <ManagerDashboardElement title='Users' numberCount={userCount} />
            <ManagerDashboardElement title='Orders' numberCount={orderCount} />
          </div>
        </div>
      </div>
    </>
  )
}
