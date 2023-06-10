const mongoose = require('mongoose')
const { Schema } = mongoose

const CartSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    books: [
      {
        bookId: {
          type: Schema.Types.ObjectId,
          ref: 'Book',
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cart', CartSchema)
