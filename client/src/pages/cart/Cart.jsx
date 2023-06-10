import React from 'react'
import './cart.css'
import UserNavbar from '../../components/userNavbar/UserNavbar'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Footer from '../../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartRedux'
import { Link } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className='cart'>
      <UserNavbar />
      <div className='cartWrapper'>
        <h1 className='cartTitle'>YOUR BAG</h1>
        <div className='cartTop'>
          <div className='cartQuantity'>Shoping Bag({cart.quantity})</div>
          <div className='resetCart' onClick={() => dispatch(resetCart())}>
            RESET CART
          </div>
          {/* <div className='topButton'>CONTINUE SHOPPING</div> */}
        </div>
        <div className='cartBottom'>
          <div className='cartInfo'>
            {cart.products.map((product, index) => (
              <>
                <div className='cartProduct'>
                  <div className='cartProductDetail'>
                    <img
                      src={product.image.url}
                      alt=''
                      className='cartProductImg'
                    />
                    <div className='cartProductDetails'>
                      <div className='cartProductId'>
                        <b>ID:</b> {product._id}
                      </div>
                      <div className='cartProductName'>
                        <b>Product: </b> {product.title}
                      </div>
                      <div className='cartProductName'>
                        <b>Author: </b> {product.author}
                      </div>
                    </div>
                  </div>
                  <div className='cartProductPriceDetail'>
                    <DeleteIcon
                      className='cartIcon deleteIcon'
                      onClick={() =>
                        dispatch(
                          removeItem({
                            productId: product._id + index,
                            productPrice: product.price,
                            productQuantity: product.quantity,
                          })
                        )
                      }
                    />
                    <div className='cartProductAmountContainer'>
                      <RemoveIcon className='cartIcon' />
                      <span className='cartProductAmount'>
                        {product.quantity}
                      </span>
                      <AddIcon className='cartIcon' />
                    </div>
                    <div className='cartProductPrice'>
                      $ {product.price * product.quantity}
                    </div>
                  </div>
                </div>
                {index !== cart.products.length - 1 && <hr />}
              </>
            ))}
          </div>
          <div className='cartSummary'>
            <h1 className='summaryTitle'>ORDER SUMMARY</h1>
            <div className='summaryItem'>
              <div className='summaryItemText'>Total</div>
              <div className='summaryItemPrice'>$ {cart.total}</div>
            </div>
            <Link to='/user/payment'>
              <button className='summaryButton'>CHECKOUT NOW</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
