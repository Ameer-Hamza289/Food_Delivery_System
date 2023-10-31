const User = require('../models/user');
const bcrypt = require('bcrypt');

// Signup controller method
const signup = async (req, res) => {
    try {
      const { username, email, password, role } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Ensure the specified role is valid (e.g., 'Admin', 'Buyer', 'Seller')
      if (!['Admin', 'Buyer', 'Seller'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user with the specified role
      const user = new User({ username, email, password: hashedPassword, role });
  
      await user.save();
  
      // Return a success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
module.exports = {
  signup,
};
