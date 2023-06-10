import React, { useEffect, useState } from 'react'
import './slider.css'
import WestOutlinedIcon from '@mui/icons-material/WestOutlined'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined'

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/06/06/26808_Quote_A1_Lore_Olympus_06-06.jpg',
    'https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/271/original/23_079_2048x600_595k_%281%29.jpg?1686063268',
    'https://images-production.bookshop.org/spree/promo_banner_slides/desktop_images/272/original/LineInTheSand_2048x600BS_%281%29.jpg?1686085239',
    'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/05/30/26709_Quote_A3_Threads-That-Bind_05-30.jpg',
    'https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/05/30/26709_Quote_A1_Good-Night-Irene_05-30.jpg',
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 0)
  }

  useEffect(() => {
    setTimeout(() => {
      // console.log('rerender')
      // setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1)
      setCurrentSlide((prev) => (prev < 4 ? prev + 1 : 0))
      // setCurrentSlide(currentSlide < 4 ? currentSlide + 1 : 0)
    }, 8000)
  })

  return (
    <div className='slider'>
      <div className='sliderLeft' onClick={prevSlide}>
        <WestOutlinedIcon />
      </div>
      <div
        className='sliderWrapper'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt='' />
        <img src={data[1]} alt='' />
        <img src={data[2]} alt='' />
        <img src={data[3]} alt='' />
        <img src={data[4]} alt='' />
      </div>
      <div className='sliderRight' onClick={nextSlide}>
        <EastOutlinedIcon />
      </div>
    </div>
  )
}

export default Slider
