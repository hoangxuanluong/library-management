const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const booksRoute = require('./routes/books')
const ordersRoute = require('./routes/orders')
const cartsRoute = require('./routes/carts')
const reviewsRoute = require('./routes/reviews')

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connect to mongodb')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected!')
})

mongoose.connection.on('connected', () => {
  console.log('mongodb connected!')
})

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/books', booksRoute)
app.use('/api/orders', ordersRoute)
app.use('/api/carts', cartsRoute)
app.use('/api/reviews', reviewsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(8080, () => {
  connect()
  console.log('Listening on port 8080!')
})
