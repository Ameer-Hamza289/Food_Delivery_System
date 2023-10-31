const express = require('express');
const router = express.Router();
const userController = require('../controller/signup');

router.post('/signup', userController.signup); //register user

module.exports = router;
