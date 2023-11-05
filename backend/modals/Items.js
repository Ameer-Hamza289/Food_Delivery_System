const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    transaction: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction', required: true },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    food_item: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem', required: true },
    quantity_sold:{type:Number, required:true}, 
  });
  
  const TransactionItem = mongoose.model('Items', ItemSchema);
  
  module.exports = TransactionItem;
  