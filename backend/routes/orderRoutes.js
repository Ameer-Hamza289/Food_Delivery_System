const express = require('express');
const router = express.Router();
const {placeOrder,
    getOrderById,
    getAllOrders,
    updateOrder,
    cancelOrder,}
=require('../controller/order')

router.get('/',getAllOrders)
router.get('/:id',getOrderById)
router.post('/create',placeOrder)
router.post('/update/:id',updateOrder)
router.delete('/delete/:id',cancelOrder)


module.exports = router;