import React, { useContext, useState } from 'react'
import './manageItem.css'
import Table from '../table/Table'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function ManageItem(props) {
  const [text, setText] = useState('')
  const { user } = useContext(AuthContext)

  return (
    <div className='manageItem'>
      <div className='manageItemWrapper'>
        <div className='manageItemHeader'>
          <div className='manageItemTitle'>
            <div className='manageItemName'>Manage {props.item}</div>
            {props.item === 'Order' ? (
              <Link to='/admin/addOrder' style={{ textDecoration: 'none' }}>
                <div className='manageItemAddButton'>Add {props.item}</div>
              </Link>
            ) : (
              <Link
                to={props.item === 'User' ? '/admin/addUser' : '/admin/addBook'}
                style={{ textDecoration: 'none' }}
              >
                {user.position === 'manager' && (
                  <div className='manageItemAddButton'>Add {props.item}</div>
                )}
              </Link>
            )}
          </div>
          <input
            type='search'
            className='manageItemSearchbar'
            placeholder='search'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <Table item={props.item} columns={props.columns} filter={text} />
      </div>
    </div>
  )
}
