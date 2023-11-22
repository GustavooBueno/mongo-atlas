// controllers/itemController.js
const Item = require('../models/itemModel');

// Create
exports.createItem = async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
};

// Read
exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

// Update
exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedItem);
};

// Delete
exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  await Item.findByIdAndDelete(id);
  res.json({ message: 'Item removido com sucesso' });
};
