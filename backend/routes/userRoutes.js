const express = require('express');
const router = express.Router();
const {signup,login, getUserProfile} = require('../controller/userController');
const authMiddleware = require('../middleware/authMiddleware');
// const userController = require('../controller/login');


router.post('/signup', signup); 
router.post('/login', login); 
router.get('/profile',authMiddleware,getUserProfile)



module.exports = router;
