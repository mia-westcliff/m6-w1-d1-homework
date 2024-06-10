const express = require('express');
const router = express.Router();
const inventoryController = require('./inventory.controller');

router.post('/api/inventory', inventoryController.createInventory);
router.get('/api/inventory/:id', inventoryController.getInventory);
router.get('/api/inventories', inventoryController.getInventories);
router.put('/api/inventory/:id', inventoryController.updateInventory);
router.delete('/api/inventory/:id', inventoryController.deleteInventory);

module.exports = router;
