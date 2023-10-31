const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,  populate: {
    path: 'user',
    match: { role: 'Buyer' }
  }, },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true,  populate: {
    path: 'user',
    match: { role: 'Seller' }
  }, },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  // items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
  sale_amount: {type:Number},
  paymentMethod: {type:String},
  status: { type: String, enum: ['Pending', 'Successful', 'Failed'], default: 'Pending' },
  time:{
    type:Date,
    default:Date.now
  },
  // quantity_sold:{
  //   type:Number
  // }


});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
