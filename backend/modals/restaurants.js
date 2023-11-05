const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({

  name: { type: String, required: true },
  address:{
    type:String,
    required:true
  },
  phone_no:{
    type:String,
    required:true
  },
  res_type:{
type:String
  },
  delivery:{
type:Boolean
  },

});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
