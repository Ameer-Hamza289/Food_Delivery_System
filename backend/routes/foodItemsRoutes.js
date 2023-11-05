const express = require('express');
const router = express.Router();
const {addFoodItem,
    updateFoodItem,
    getFoodItemById,
    getAllFoodItems,
    deleteFoodItem,}
=require('../controller/foodItem')

router.get('/',getAllFoodItems)
router.get('/:id',getFoodItemById)
router.post('/create',addFoodItem)
router.post('/update/:id',updateFoodItem)
router.delete('/delete/:id',deleteFoodItem)


module.exports = router;