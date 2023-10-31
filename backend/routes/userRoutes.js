const express = require('express');
const router = express.Router();
const {signup,login} = require('../controller/userController');
// const userController = require('../controller/login');


router.post('/signup', signup); //register user
router.post('/login', login); //login user



module.exports = router;
