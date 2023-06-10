import React from 'react'
import './card.css'

function Card(book) {
  return (
    <div className='card'>
      <div className='cardImage'>
        <div className='cardDiscount'>-50%</div>
        <img src={book?.image?.url} alt='' className='cardImg' />
      </div>
      <h2 className='cardTitle'>{book.title}</h2>
      <div className='prices'>
        <h3 className='price'>${book.price * 2}</h3>
        <h3 className='price'>${book.price}</h3>
      </div>
    </div>
  )
}

export default Card
