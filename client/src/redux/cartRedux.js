import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item, index) => item._id + index !== action.payload.productId
      )
      state.quantity -= 1
      state.total -=
        action.payload.productPrice * action.payload.productQuantity
    },
    resetCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
  },
})

export const { addProduct, removeItem, resetCart } = cartSlice.actions
export default cartSlice.reducer
