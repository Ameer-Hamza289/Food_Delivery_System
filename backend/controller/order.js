const Order = require('../models/order');

// Place a new order
const placeOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create Order' });
  }
};

// Get a list of all Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch Orders' });
  }
};

// Get a specific Order by ID
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch Order' });
  }
};

//update order
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update Order' });
  }
};

// Cancel an order
const cancelOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndRemove(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(204).send(); // 204 No Content for successful deletion
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Order' });
  }
};

module.exports = {
  placeOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  cancelOrder,
};
