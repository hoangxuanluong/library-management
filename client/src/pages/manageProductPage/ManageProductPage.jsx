import React from 'react'
import './manageProductPage.css'
import ManagerNavbar from '../../components/managerNavbar/ManagerNavbar'
import ManagerSidebar from '../../components/managerSidebar/ManagerSidebar'
import ManageItem from '../../components/ManageItem/ManageItem'

export const productColumns = [
  { field: '_id', headerName: 'ID', width: 50 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
  },
  {
    field: 'author',
    headerName: 'Author',
    width: 100,
  },
  {
    field: 'publishYear',
    headerName: 'Year',
    width: 75,
  },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },

  {
    field: 'desc',
    headerName: 'Description',
    width: 200,
  },
]

export default function ManageProductPage() {
  return (
    <>
      <ManagerNavbar />
      <div className='manageProductPage'>
        <ManagerSidebar />
        <ManageItem columns={productColumns} item='Book' />
      </div>
    </>
  )
}
