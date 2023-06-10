import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='topFooter'>
        <div className='topFooterItem'>
          <h1>Categories</h1>
          <span>Mystery</span>
          <span>Novel</span>
          <span>Romantic</span>
          <span>Action</span>
          <span>Horror</span>
        </div>
        <div className='topFooterItem'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='topFooterItem'>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className='topFooterItem'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className='bottomFooter'>
        <div className='bottomFooterLeft'>
          <span className='bottomFooterLeftLogo'>Bookshop</span>
          <span className='bottomFooterLeftCopyright'>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className='bottomFooterRight'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  )
}

export default Footer
