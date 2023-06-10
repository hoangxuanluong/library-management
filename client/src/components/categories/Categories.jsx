import React from 'react'
import './categories.css'

function Categories() {
  const handleClick = (category) => {
    console.log(category)
  }

  return (
    <div className='categories'>
      <div className='categoriesTitle'>Categories</div>
      <div className='categoriesAll'>
        <div className='category' onClick={() => handleClick('mystery')}>
          <img
            className='categoryImage'
            src='https://d15fwz9jg1iq5f.cloudfront.net/wp-content/uploads/2018/01/06103321/Blog-YOERMysteries.jpg'
            alt=''
          />
          <div className='categoryName'>Mystery</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://booksandbao.com/wp-content/uploads/2023/04/best-fantasy-books-e1682010454543-1000x563.jpg.webp'
            alt=''
          />
          <div className='categoryName'>Fantasy</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://i.insider.com/607f2d9174da0300181e2cc1?width=700'
            alt=''
          />
          <div className='categoryName'>Romance</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://media.glamourmagazine.co.uk/photos/617a78aea9334a8f26385644/1:1/w_1920,h_1920,c_limit/HORRORBOOKS281021_DEFAULT1.jpg'
            alt=''
          />
          <div className='categoryName'>Horror</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://media.wiley.com/product_data/coverImage300/55/11195906/1119590655.jpg'
            alt=''
          />
          <div className='categoryName'>Science</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://philonline.vn/upload/product/phil-online-the-business-book-big-ideas-simply-explained-pdf--47.jpg'
            alt=''
          />
          <div className='categoryName'>Business</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://media.glamourmagazine.co.uk/photos/6138a888a35312eec2784027/4:3/w_1920,h_1440,c_limit/best-poetry-books_sq.jpg'
            alt=''
          />
          <div className='categoryName'>Poetry</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://m.media-amazon.com/images/I/41eA0SvrVbL._SL500_.jpg'
            alt=''
          />
          <div className='categoryName'>Comedy</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1679659097-410sd2-izcL._SL500_.jpg?crop=1xw:1xh;center,top&resize=980:*'
            alt=''
          />
          <div className='categoryName'>Personal Development</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://images.squarespace-cdn.com/content/v1/57483e0df699bbec3bf5f6ef/1613485622560-E6PJX0EN958F3UYNR6T7/best-outdoor-adventure-books.jpg'
            alt=''
          />
          <div className='categoryName'>Adventure</div>
        </div>
        <div className='category'>
          <img
            className='categoryImage'
            src='https://media.glamourmagazine.co.uk/photos/617a78aea9334a8f26385644/1:1/w_1920,h_1920,c_limit/HORRORBOOKS281021_DEFAULT1.jpg'
            alt=''
          />
          <div className='categoryName'>Family</div>
        </div>
      </div>
    </div>
  )
}

export default Categories
