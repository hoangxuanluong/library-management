const Cart = require('../model/Cart')

module.exports.createCart = async (req, res, next) => {
  const newCart = new Cart(req.body)

  try {
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
  } catch (err) {
    next(err)
  }
}

module.exports.updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    next(err)
  }
}

module.exports.deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json('Cart has been deleted...')
  } catch (err) {
    next(err)
  }
}

module.exports.getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    res.status(200).json(cart)
  } catch (err) {
    next(err)
  }
}

module.exports.getCarts = async (req, res, next) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    next(err)
  }
}
