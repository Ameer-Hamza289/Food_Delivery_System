const Items = require('../modals/Items');

//add items
const addItem = async (req, res) => {
    try {
      const Item = new Items(req.body);
      const savedItem = await Item.save();
      res.status(201).json(savedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to add Item' });
    }
  };

  //get all items
  const getAllItems = async (req, res) => {
    try {
      const allItems = await Items.find();
      res.status(200).json(allItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error while getting items ' });
    }
  };

// Get a specific Item by ID
const getItemById = async (req, res) => {
    try {
      const Item = await Items.findById(req.params.id);
      if (!Item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(Item);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to fetch Item' });
    }
  };


  // Update a Item by ID
const updateItem = async (req, res) => {
    try {
      const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedItem) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update Item' });
    }
  };

// Delete a Item by ID
const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Items.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete Item' });
  }
};

module.exports = {
    addItem,
    getItemById,
    getAllItems,
    updateItem,
    deleteItem,
};
