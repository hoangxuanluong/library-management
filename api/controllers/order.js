const Order = require('../model/Order')
const stripe = require('stripe')(process.env.STRIPE_KEY)

module.exports.createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body)
  const { products } = req.body
  try {
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (error) {
    next(error)
  }
}

module.exports.updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedOrder)
  } catch (error) {
    next(error)
  }
}

module.exports.deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res.status(200).json('Order has been deleted!')
  } catch (error) {
    res.status(500).json(error)
    next(error)
  }
}

module.exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id)
    res.status(200).json(order)
  } catch (error) {
    next(error)
  }
}

module.exports.getOrders = async (req, res, next) => {
  const userId = req.query.userId
  let orders
  try {
    if (userId) {
      orders = await Order.find({ customerId: userId, status: 'unpaid' })
    } else {
      orders = await Order.find()
    }
    res.status(200).json(orders)
  } catch (error) {
    next(error)
  }
}

// module.exports.getIncome = async (req, res, next) => {
//   const date = new Date()
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

//   try {
//     const data = await Order.aggregate([
//       { $match: { createdAt: { $gte: lastYear }, status: 'paid' } },
//       {
//         $unwind: '$foods',
//       },
//       {
//         $lookup: {
//           from: 'foods',
//           localField: 'foods.foodId',
//           foreignField: '_id',
//           as: 'foodDetails',
//         },
//       },
//       {
//         $project: {
//           year: { $year: '$createdAt' },
//           month: { $month: '$createdAt' },
//           food: { $arrayElemAt: ['$foodDetails.name', 0] },
//           quantity: '$foods.quantity',
//           price: { $arrayElemAt: ['$foodDetails.price', 0] },
//         },
//       },
//       {
//         $group: {
//           _id: { year: '$year', month: '$month' },
//           total: { $sum: { $multiply: ['$quantity', '$price'] } },
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           year: '$_id.year',
//           month: '$_id.month',
//           total: 1,
//         },
//       },
//       {
//         $sort: { year: 1, month: 1 },
//       },
//     ])
//     res.status(200).json(data)
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports.getFoodStat = async (req, res, next) => {
//   try {
//     const currentDate = new Date()
//     const currentMonth = currentDate.getMonth() + 1 // Lấy số tháng hiện tại (từ 1 đến 12)

//     const result = await Order.aggregate([
//       {
//         $match: {
//           createdAt: {
//             $gte: new Date(currentDate.getFullYear(), currentMonth - 1, 1), // Ngày đầu tháng
//             $lte: new Date(currentDate.getFullYear(), currentMonth, 0), // Ngày cuối tháng
//           },
//           status: 'paid',
//         },
//       },
//       {
//         $unwind: '$foods',
//       },
//       {
//         $lookup: {
//           from: 'foods',
//           localField: 'foods.foodId',
//           foreignField: '_id',
//           as: 'foodDetails',
//         },
//       },
//       {
//         $project: {
//           food: { $arrayElemAt: ['$foodDetails.name', 0] },
//           quantity: '$foods.quantity',
//         },
//       },
//       {
//         $group: {
//           _id: '$food',
//           totalQuantity: { $sum: '$quantity' },
//         },
//       },
//       {
//         $sort: { totalQuantity: -1 }, // Sắp xếp theo tổng số lượng giảm dần
//       },
//     ])

//     res.status(200).json(result)
//   } catch (error) {
//     next(error)
//   }
// }

// module.exports.getFoodStatByDate = async (req, res, next) => {
//   const { startDate, endDate } = req.body
//   console.log(startDate, endDate)
//   try {
//     const startDateStat = new Date(startDate)
//     const endDateStat = new Date(endDate)

//     const result = await Order.aggregate([
//       {
//         $match: {
//           createdAt: {
//             $gte: startDateStat,
//             $lte: endDateStat,
//           },
//           status: 'paid',
//         },
//       },
//       {
//         $unwind: '$foods',
//       },
//       {
//         $lookup: {
//           from: 'foods',
//           localField: 'foods.foodId',
//           foreignField: '_id',
//           as: 'foodDetails',
//         },
//       },
//       {
//         $project: {
//           food: { $arrayElemAt: ['$foodDetails.name', 0] },
//           quantity: '$foods.quantity',
//         },
//       },
//       {
//         $group: {
//           _id: '$food',
//           totalQuantity: { $sum: '$quantity' },
//         },
//       },
//       {
//         $sort: { totalQuantity: -1 },
//       },
//     ])

//     res.status(200).json(result)
//   } catch (error) {
//     next(error)
//   }
// }
