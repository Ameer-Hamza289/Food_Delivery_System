const express = require('express');
const router = express.Router();
const {createRestaurant,getAllRestaurants,updateRestaurant,deleteRestaurant, getRestaurantById}
=require('../controller/restaurants')

router.get('/',getAllRestaurants)
router.get('/:id',getRestaurantById)
router.post('/create',createRestaurant)
router.post('/update/:id',updateRestaurant)
router.delete('/delete/:id',deleteRestaurant)



module.exports = router;