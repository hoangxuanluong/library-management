const Book = require('../model/Book')

module.exports.createBook = async (req, res, next) => {
  const newBook = new Book(req.body)
  try {
    const savedBook = await newBook.save()
    res.status(200).json(savedBook)
  } catch (error) {
    next(error)
  }
}

module.exports.updateBook = async (req, res, next) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedBook)
  } catch (error) {
    next(error)
  }
}

module.exports.deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id)
    res.status(200).json('book has been deleted!')
  } catch (error) {
    res.status(500).json(error)
    next(error)
  }
}

module.exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id)
    res.status(200).json(book)
  } catch (error) {
    next(error)
  }
}

module.exports.getBooks = async (req, res, next) => {
  const query = req.query
  let books
  try {
    if (query.new) {
      books = await Book.find().sort({ _id: -1 }).limit(5)
    } else if (query.keyword) {
      const regex = new RegExp(query.keyword, 'i')
      books = await Book.find({
        $or: [{ name: regex }, { desc: regex }],
      }).limit(5)
    } else {
      books = await Book.find()
    }
    res.status(200).json(books)
  } catch (error) {
    next(error)
  }
}
