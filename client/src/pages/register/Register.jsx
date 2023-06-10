import React, { useState } from 'react'
import './register.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import Footer from '../../components/footer/Footer'
import NewsLetter from '../../components/newsLetter/NewsLetter'

function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/register', user)
      console.log(res.data)
      navigate('/user/home')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <UserNavbar />
      <div className='register'>
        <form onSubmit={handleSubmit}>
          <div className='registerWrapper'>
            <h1 className='registerTitle'>Create a new account</h1>
            <label className='registerLabel' htmlFor='username'>
              Username
            </label>
            <input
              className='registerInput'
              id='username'
              name='username'
              type='text'
              placeholder='enter your username'
              onChange={handleChange}
            />
            <label className='registerLabel' htmlFor=''>
              Email
            </label>
            <input
              className='registerInput'
              name='email'
              type='email'
              placeholder='enter your email'
              onChange={handleChange}
            />
            <label className='registerLabel' htmlFor=''>
              Password
            </label>
            <input
              className='registerInput'
              name='password'
              type='password'
              placeholder='enter your password'
              onChange={handleChange}
            />
            <button type='submit' className='registerButton'>
              Register
            </button>
          </div>
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Register
