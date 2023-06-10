import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid'

import './table.css'

export default function List({ item, columns, filter }) {
  const [data, setData] = useState([])
  console.log(filter)

  useEffect(() => {
    const fetchData = async () => {
      let res
      try {
        if (filter) {
          res = await axios.get(
            item === 'Book'
              ? `/api/books?keyword=${filter}`
              : `/api/user?keyword=${filter}`
          )
        } else {
          res = await axios.get(item === 'Book' ? '/api/books' : '/api/user')
        }
        setData(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [item, filter])

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        item === 'Book' ? `/api/books/${id}` : `/api/user/${id}`
      )
      setData(data.filter((item) => item._id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            {item === 'Book' && (
              <Link
                to={`/admin/books/${params.row._id}`}
                style={{ textDecoration: 'none' }}
              >
                <div className='viewButton'>View</div>
              </Link>
            )}
            {item === 'Book' && (
              <Link
                to={`/admin/books/${params.row._id}/edit`}
                style={{ textDecoration: 'none' }}
              >
                <div className='updateButton'>Update</div>
              </Link>
            )}
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]

  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        {item === 'User' ? 'Users' : 'Books'}
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
        editMode='row'
        disableRowSelectionOnClick
      />
    </div>
  )
}
