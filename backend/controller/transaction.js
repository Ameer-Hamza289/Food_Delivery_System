const Transaction = require('../models/transaction');

const performTransaction = async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create Transaction' });
  }
};

// get all transactions
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch Transactions' });
  }
};

// Get a specific Transaction by ID
const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch Transaction' });
  }
};

// Update a Transaction by ID
const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update Transaction' });
  }
};

// Delete a Transaction by ID
const deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndRemove(req.params.id);
    if (!deletedTransaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Transaction' });
  }
};

// Handle payment failures
const handlePaymentFailure = (req, res) => {
  // Handle payment failures and provide appropriate responses
  console.log("Payment Failure")
};

module.exports = {
  performTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  handlePaymentFailure,
};
