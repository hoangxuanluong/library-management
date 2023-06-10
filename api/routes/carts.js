const express = require('express')
const {
  createCart,
  updateCart,
  deleteCart,
  getCart,
  getCarts,
} = require('../controllers/cart')

const router = express.Router()

router.post('/', createCart)

router.put('/:id', updateCart)

router.delete('/:id', deleteCart)

router.get('/:id', getCart)

router.get('/', getCarts)

module.exports = router
