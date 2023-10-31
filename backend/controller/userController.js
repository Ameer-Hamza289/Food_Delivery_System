const User = require('../modals/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const secretKey = 'qwertyuiop'; 

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


// Login controller method
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body,"body");
  
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
  

module.exports = {
    login,signup
  };