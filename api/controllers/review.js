const Book = require('../model/Book')
const Review = require('../model/Review')

module.exports.createReview = async (req, res, next) => {
  const review = new Review(req.body.review)
  try {
    const book = await Book.findById(req.params.id)
    review.author = req.user._id
    book.reviews.push(review)
    await review.save()
    await book.save()
    res.status(200).json(review)
  } catch (error) {
    next(error)
  }
}

module.exports.deleteReview = async (req, res, next) => {
  const { id, reviewId } = req.params
  try {
    await Book.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId)
    res.status(200).json('Review has been deleted!')
  } catch (error) {
    next(error)
  }
}
