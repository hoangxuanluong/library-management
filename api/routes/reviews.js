const express = require('express')
const { createReview, deleteReview } = require('../controllers/review')

const router = express.Router()

router.post('/', createReview)

router.delete('/:reviewId', deleteReview)

module.exports = router
