const FoodItem = require('../modals/foodItems');

//add food item
const addFoodItem = async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    const savedFoodItem = await foodItem.save();
    res.status(201).json(savedFoodItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create FoodItem' });
  }
};


// Update food item details
const updateFoodItem = async (req, res) => {
  try {
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFoodItem) {
      return res.status(404).json({ message: 'FoodItem not found' });
    }
    res.status(200).json(updatedFoodItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update FoodItem' });
  }
};

//get all food Items
const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).json(foodItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch FoodItems' });
  }
};


//get foodItem by Id
const getFoodItemById = async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ message: 'FoodItem not found' });
    }
    res.status(200).json(foodItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch FoodItem' });
  }
};

// Delete a food item
const deleteFoodItem = async (req, res) => {
  try {
    const deletedFoodItem = await FoodItem.findByIdAndRemove(req.params.id);
    if (!deletedFoodItem) {
      return res.status(404).json({ message: 'FoodItem not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete FoodItem' });
  }
};

module.exports = {
  addFoodItem,
  updateFoodItem,
  getFoodItemById,
  getAllFoodItems,
  deleteFoodItem,
};
