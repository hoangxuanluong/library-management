import React, { useContext, useEffect, useState } from 'react'
import './product.css'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'
import Rating from '@mui/material/Rating'
import { AuthContext } from '../../context/AuthContext'

function Product() {
  const id = useLocation().pathname.split('/')[3]
  const [data, setData] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [value, setValue] = React.useState(2)
  const [reviewText, setReviewText] = useState('')
  const dispatch = useDispatch()
  const user = useContext(AuthContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchData = async () => {
      let res
      try {
        res = await axios.get(`/api/books/${id}`)

        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [id])

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    dispatch(addProduct({ ...data, quantity }))
  }

  const handleCreateReview = async (e) => {
    try {
      const res = await axios.post('/api/reviews', {
        body: reviewText,
        rating: value,
        author: user.user._id,
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='product'>
      <UserNavbar />
      <div className='productWrapper'>
        <div className='imageContainer'>
          <img className='productImage' src={data?.image?.url} alt='' />
        </div>
        <div className='infoContainer'>
          <h1 className='infoTitle'>{data.title}</h1>
          <p className='infoDesc'>{data.desc}</p>
          <span className='infoPrice'>${data.price}</span>
          <div className='addContainer'>
            <div className='amountContainer'>
              <RemoveIcon onClick={() => handleQuantity('dec')} />
              <span className='amount'>{quantity}</span>
              <AddIcon onClick={() => handleQuantity('inc')} />
            </div>
            <button className='addToCart' onClick={handleClick}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className='reviews'>
        <div className='reviewTitle'>Reviews</div>
        <div className='reviewComponent'>
          <div className='starComponent'>
            <Rating
              name='simple-controlled'
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
            />
          </div>
          <textarea
            className='textComponent'
            name=''
            id=''
            cols='50'
            rows='5'
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <button className='reviewButton' onClick={handleCreateReview}>
            Post Review
          </button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Product
