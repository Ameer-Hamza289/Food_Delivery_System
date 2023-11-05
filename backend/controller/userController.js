const User = require('../modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'qwertyuiop'; 

const signup = async (req, res) => {
    try {
      const {first_name,last_name, username, email, password, role, address, cnic, d_o_b, gender, marital_status, phone_no,  sales_per_month,joining_date  } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      if (!['Admin', 'Buyer', 'Seller'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user with the specified role
      const user = new User({first_name,last_name, username, email, password: hashedPassword, role, address, cnic, d_o_b, gender, marital_status, phone_no,  sales_per_month,joining_date  });
  
      await user.save();
  
      // Return a success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


// Login controller method
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      // console.log(req.body,"body");
  
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'No such user found' });
      }

      //    Compare the password
    passwordMatch= await bcrypt.compare(password, user.password)
    
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token 
      const token = jwt.sign({ userId: user._id, email: user.email, role: user.role }, secretKey, { expiresIn: '1h' });
  
      // Return the token, user information, and role 
      res.status(200).json({
        token,
        user: { username: user.username, email: user.email, role: user.role },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };


const getUserProfile = async (req, res) => {
  try {
    const user = req.user; 

   
    res.status(200).json({
      first_name:user.first_name,
      last_name:user.last_name,
      username: user.username,
      email: user.email,
      role: user.role,
      address:user.address,
      cnic:user.cnic,
      d_o_b:user.d_o_b,
      gender:user.gender,
      marital_status:user.marital_status,
      phone_no:user.phone_no,
      sales_per_month:user.sales_per_month,
      joining_date:user.joining_date
      
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


  

module.exports = {
    login,signup, getUserProfile
  };