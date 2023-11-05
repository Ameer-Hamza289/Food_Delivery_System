
const express = require('express');
const router = express.Router();
const {addItem,
    getItemById,
    getAllItems,
    updateItem,
    deleteItem}
=require('../controller/item')

router.get('/',getAllItems)
router.get('/:id',getItemById)
router.post('/create',addItem)
router.post('/update/:id',updateItem)
router.delete('/delete/:id',deleteItem)



module.exports = router;



