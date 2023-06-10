import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import './newsLetter.css'

function NewsLetter() {
  return (
    <div className='newsLetter'>
      <div className='newsLetterTitle'>Newsletter</div>
      <div className='newsLetterDesc'>
        Get timely updates from your favorite products.
      </div>
      <div className='newsLetterInputContainer'>
        <input type='text' className='newsLetterInput' />
        <button className='newsLetterButton'>
          <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
