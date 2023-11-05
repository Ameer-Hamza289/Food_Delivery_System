const express = require('express');
const router = express.Router();
const {performTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransaction,
    deleteTransaction}
=require('../controller/transaction')

router.get('/',getAllTransactions)
router.get('/:id',getTransactionById)
router.post('/create',performTransaction)
router.post('/update/:id',updateTransaction)
router.delete('/delete/:id',deleteTransaction)


module.exports = router;