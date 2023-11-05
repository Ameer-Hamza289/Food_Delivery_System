const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  totalAmount: {type:Number},
  status: { type: String, enum: ['Pending', 'Completed', 'Cancelled'], default: 'Pending' },
  total_cost:{
    type:Number
  },
  payment_status: { type: String, enum: ['Pending', 'Clear'], default: 'Pending' },
  time:{
    type:Date,
    default:Date.now
  },
  delivery_address:{
    type:String,
    required:true

  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
