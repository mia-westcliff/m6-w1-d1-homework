const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
  category: String,
});

module.exports = mongoose.model('Inventory', inventorySchema);
