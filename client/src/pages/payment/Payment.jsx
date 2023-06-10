import React, { useContext, useState } from 'react'
import './payment.css'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import { AuthContext } from '../../context/AuthContext'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Payment() {
  const [credentials, setCredentials] = useState({})
  const user = useContext(AuthContext)
  console.log(user)
  const cart = useSelector((state) => state.cart)
  const { products, quantity, total } = cart
  console.log(products, quantity, total)

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    const newArrayProducts = products.map((product) => {
      return {
        author: product.author,
        category: product.category,
        price: product.price,
        publishYear: product.publishYear,
        title: product.title,
        quantity: product.quantity,
      }
    })
    const res = await axios.post('/api/orders', {
      products: newArrayProducts,
      quantity,
      total,
      customerInfo: credentials,
      customerId: user.user._id,
    })
    console.log(res.data)
  }
  return (
    <>
      <UserNavbar />
      <div className='payment'>
        <form className='paymentForm'>
          <h1 className='paymentTitle'>Order Info</h1>
          <label className='loginLabel'>Name</label>
          <input
            name='name'
            className='paymentInput'
            type='text'
            placeholder='Enter your name...'
            onChange={handleChange}
          />
          <label className='loginLabel'>Address</label>
          <input
            name='address'
            className='paymentInput'
            type='text'
            placeholder='Enter your address...'
            onChange={handleChange}
          />
          <button className='loginButton' onClick={handleClick}>
            Confirm
          </button>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Payment
