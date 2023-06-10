const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    customerInfo: {
      name: String,
      address: String,
    },
    products: [
      {
        title: String,
        category: String,
        price: Number,
        publishYear: Number,
        author: String,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    total: {
      type: Number,
    },
    status: {
      type: String,
      enum: ['unpaid', 'paid'],
      default: 'unpaid',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
