const express = require('express')
const {
  createBook,
  updateBook,
  getBook,
  getBooks,
  deleteBook,
} = require('../controllers/book')
const { verifyAdmin } = require('../utils/verifyToken')

const router = express.Router()

router.post('/', createBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

router.get('/:id', getBook)

router.get('/', getBooks)

module.exports = router
