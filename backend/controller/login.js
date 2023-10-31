const User = require('../models/user');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // Replace with a secure secret key

// Login controller method
const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  console.log("Body");
      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  

      
      // Compare the password
      const passwordMatch = await bcrypt.compare(password, user.password);
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
    login,
  };