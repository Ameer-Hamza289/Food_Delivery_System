const express = require('express');
const router = express.Router();
const userController = require('../controller/login');

router.post('/login', userController.login); //login user

module.exports = router;
