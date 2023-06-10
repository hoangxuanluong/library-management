import React, { useEffect, useState } from 'react'
import './order.css'
import axios from 'axios'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'

function Order() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/orders')
        setData(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <UserNavbar />
      <div className='order'>
        <div className='cartWrapper'>
          <h1 className='cartTitle'>YOUR Order</h1>
          <div className='cartTop'>
            <div className='continueShopping'>Order({data.length})</div>
            {/* <div className='topButton'>CONTINUE SHOPPING</div> */}
          </div>
          <div className='cartBottom'>
            <div className='cartInfo'>
              {data.map((product, index) => (
                <>
                  <div className='cartProduct'>
                    <div className='cartProductDetail'>
                      {/* <img
                        src={product.image.url}
                        alt=''
                        className='cartProductImg'
                      /> */}
                      <div className='cartProductDetails'>
                        <div className='cartProductId'>
                          <b>ID:</b> {product._id}
                        </div>
                        <div className='cartProductName'>
                          <b>Client: </b> {product.customerInfo.name}
                        </div>
                        <div className='cartProductName'>
                          <b>Address: </b> {product.customerInfo.address}
                        </div>
                        <div className='cartProductName'>
                          <b>Quantity: </b> {product.products.length}
                        </div>
                        <div className='cartProductName'>
                          <b>Products: </b>{' '}
                          {product.products.map(
                            (p) => p.title + '(' + p.quantity + '), '
                          )}
                        </div>
                        <div className='cartProductName'>
                          <b>Total: </b> $ {product.total}
                        </div>
                        <div className='cartProductName'>
                          <b>Status: </b> {product.status}
                        </div>
                      </div>
                    </div>
                    <div className='cartProductPriceDetail'>
                      <div className='cartProductPrice'>Cancel Order</div>
                    </div>
                  </div>
                  {index !== data.length - 1 && <hr />}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Order
