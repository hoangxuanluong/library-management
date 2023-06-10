import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import ManagerHomePage from './pages/managerHomePage/ManagerHomePage'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import ManageUserPage from './pages/manageUserPage/ManageUserPage'
import ManageOrderPage from './pages/manageOrderPage/ManageOrderPage'
import ViewOrderPage from './pages/viewOrderPage/ViewOrderPage'
import ViewReportPage from './pages/viewReportPage/ViewReportPage'
import ManageProductPage from './pages/manageProductPage/ManageProductPage'
import BookPage from './pages/bookPage/BookPage'
import UserHome from './pages/userHome/UserHome'
import Product from './pages/product/Product'
import Cart from './pages/cart/Cart'
import { AuthContext } from './context/AuthContext'
import Payment from './pages/payment/Payment'
import Order from './pages/order/Order'

function App() {
  const { user } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin/dashboard' element={<ManagerHomePage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin/users' element={<ManageUserPage />} />
        <Route path='/admin/books' element={<ManageProductPage />} />
        <Route path='/admin/books/:id' element={<BookPage />} />
        <Route path='/admin/addBook' element={<BookPage />} />
        <Route path='/user/home' element={<UserHome />} />
        <Route path='/user/books/:id' element={<Product />} />
        <Route path='/user/cart' element={<Cart />} />
        <Route path='/user/payment' element={<Payment />} />
        <Route path='/user/order' element={<Order />} />

        {/* <Route exact path='/addUser' element={<AddUserPage />} /> */}
        {/* <Route exact path='/orders' element={<ManageOrderPage />} />
        <Route exact path='/orders/:id' element={<ViewOrderPage />} />
        <Route exact path='/viewReport' element={<ViewReportPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
