// models/itemModel.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
