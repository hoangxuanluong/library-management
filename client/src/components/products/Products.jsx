import React, { useEffect, useState } from 'react'
import './products.css'
import Card from '../card/Card'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      let res
      try {
        res = await axios.get(`/api/books`)
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='products'>
      <div className='productsTitle'>Books</div>
      <div className='productsList'>
        {data.map((book) => (
          <Link key={book._id} to={`/user/books/${book._id}`}>
            <Card {...book} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Products
