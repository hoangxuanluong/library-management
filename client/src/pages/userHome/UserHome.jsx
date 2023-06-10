import React from 'react'
import './userHome.css'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import Products from '../../components/products/Products'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'

function UserHome() {
  return (
    <div>
      <UserNavbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default UserHome
