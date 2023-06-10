const mongoose = require('mongoose')
const { Schema } = mongoose

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
  },
  publishYear: {
    type: Number,
    require: true,
  },
  pages: {
    type: Number,
  },
  price: {
    type: Number,
    require: true,
  },
  category: {
    type: String,
  },
  image: {
    url: String,
    filename: String,
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
})

module.exports = mongoose.model('Book', BookSchema)
