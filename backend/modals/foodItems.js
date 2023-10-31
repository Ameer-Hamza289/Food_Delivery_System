const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type:String},
  price:{ type:Number},
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  discount:{type:Number},
  quantity_available:{
    type:Number
  },
  preparation_time:{
    type:String
  },
  serving_size:{
    type:String
  },
  promotional_price:{
    type:String
  }

});

const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
