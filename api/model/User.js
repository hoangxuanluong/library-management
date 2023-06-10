const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: 'client',
  },
  img: {
    url: String,
    filename: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('User', UserSchema)
