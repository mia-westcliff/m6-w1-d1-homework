const Inventory = require('./inventory.model');

exports.createInventory = async (req, res) => {
  const inventory = new Inventory(req.body);
  try {
    await inventory.save();
    res.status(201).send(inventory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    if (!inventory) {
      return res.status(404).send();
    }
    res.send(inventory);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find({});
    res.send(inventories);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!inventory) {
      return res.status(404).send();
    }
    res.send(inventory);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) {
      return res.status(404).send();
    }
    res.send(inventory);
  } catch (error) {
    res.status(500).send(error);
  }
};
