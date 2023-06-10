import React from 'react'
import ManagerNavbar from '../../components/managerNavbar/ManagerNavbar'
import ManagerSidebar from '../../components/managerSidebar/ManagerSidebar'
import Book from '../../components/book/Book'
import './bookPage.css'

function BookPage() {
  return (
    <>
      <ManagerNavbar />
      <div className='bookPage'>
        <ManagerSidebar />
        <Book />
      </div>
    </>
  )
}

export default BookPage
