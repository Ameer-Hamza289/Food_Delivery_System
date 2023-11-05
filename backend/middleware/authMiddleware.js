const jwt = require('jsonwebtoken');
const secretKey = 'qwertyuiop'; 

const authMiddleware = (req, res, next) => {

    // try {
    //     const token = req.headers.authorization; // Assuming it's in the header
    //     const decoded = jwt.verify(token, secretKey);
    //     console.log(decoded);
    //     req.user = decoded;
    //     next();
    //   } catch (error) {
    //     console.error('Token decoding error:', error);
    //     return res.status(401).json({ message: 'Invalid token' });
    //   }

  const token = req.headers.authorization || req.query.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded; 
    next(); 
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};

module.exports = authMiddleware;
