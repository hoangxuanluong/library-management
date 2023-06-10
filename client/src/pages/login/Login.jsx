import React, { useContext, useState } from 'react'
import './login.css'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  })

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    dispatch({ type: 'LOGIN_START' })
    try {
      const res = await axios.post('/api/auth/login', credentials)
      console.log(res.data)
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.details })
      if (res.data.isAdmin === false) {
        navigate('/user/home')
      } else {
        navigate('/admin/dashboard')
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data })
    }
  }

  return (
    <>
      <UserNavbar />
      <div className='login'>
        <form className='loginForm'>
          <h1 className='loginTitle'>Sign in</h1>
          <label className='loginLabel'>Username</label>
          <input
            name='username'
            className='loginInput'
            type='text'
            placeholder='Enter your username...'
            onChange={handleChange}
          />
          <label className='loginLabel'>Password</label>
          <input
            name='password'
            className='loginInput'
            type='password'
            placeholder='Enter your password...'
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className='loginButton'
            onClick={handleClick}
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
        </form>
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Login
