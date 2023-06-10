import React from 'react'
import './manageItemHeader.css'
import { Link } from 'react-router-dom'

export default function ManageItemHeader(props) {
  return (
    <div className='manageItemHeader'>
      <div className='manageItemTitle'>
        <div className='manageItemName'>Manage {props.item}</div>
        {props.item === 'Order' ? (
          <Link to='/admin/addOrder' style={{ textDecoration: 'none' }}>
            <div className='manageItemAddButton'>Add {props.item}</div>
          </Link>
        ) : (
          <Link to='/admin/addUser' style={{ textDecoration: 'none' }}>
            <div className='manageItemAddButton'>Add {props.item}</div>
          </Link>
        )}
      </div>
      <input
        type='search'
        className='manageItemSearchbar'
        placeholder='search'
      />
    </div>
  )
}
