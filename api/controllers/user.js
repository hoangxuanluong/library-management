const User = require('../model/User')

module.exports.updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
}
module.exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json('User has been deleted.')
  } catch (err) {
    next(err)
  }
}
module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}
module.exports.getUsers = async (req, res, next) => {
  const query = req.query
  let users
  try {
    if (query.new) {
      users = await User.find().sort({ _id: -1 }).limit(5)
    } else if (query.keyword) {
      const regex = new RegExp(query.keyword, 'i')
      users = await User.find({
        $or: [{ username: regex }, { position: regex }],
      }).limit(5)
    } else {
      users = await User.find()
    }
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}
