const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

// In a typical MongoDB schema, every document (record) is automatically assigned a unique _id
// field by default. This _id field serves as a unique identifier for each document in the
// collection. You don't need to explicitly define it in your schema; MongoDB will handle it
// for you.

const userSchema = new mongoose.Schema({
  first_name:{
    type:String,
    // required:true
  },
  last_name:{
    type:String
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Buyer', 'Seller'],
    default: 'Buyer', // Set the default role to Buyer
  },
  address:{
    type:String,
  },
  cnic:{
      type:String
  },
  d_o_b:{
    type:String
  },
  gender:{
    type:String
  },
  marital_status:{
    type:String
  },
  phone_no:{
    type:String,
    required:true
  },
  sales_per_month: {
    type: Number,
    default: null, 
  },
  joining_date: {
    type: Date,
    default: null,
  },
});



userSchema.pre('save', async function (next) {
  try{
    const user=this
    if (!user.joining_date && (user.role === 'Seller')) {
      user.joining_date = new Date();
    }
  }
  catch(error){
return next(error);
  }
})


// Hash the password before saving to the database
// userSchema.pre('save', async function(next) {
//   try {
//     const user = this;
//     if (!user.isModified('password')) return next();
//     const hash = await bcrypt.hash(user.password, 10);
//     user.password = hash;
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// });

// // Method to compare hashed password during login
// userSchema.methods.comparePassword = async function(candidatePassword) {
//   return bcrypt.compare(candidatePassword, this.password);
// };


const User = mongoose.model('User', userSchema);

module.exports = User;
