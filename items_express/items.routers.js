const express = require('express');
const middleware = require('./items.middleware')
const controller = require('./items.controller')

const router = express.Router();

// GET items
router.get('/', controller.GetItems)

// POST Items
router.post('/', middleware.CheckSizes, controller.CreateItems)

// GET one /item/134
router.get('/:id', controller.getOneItem)

// Update one /item/134
router.patch("/:id",controller.updateItem)
    
// Delete one /item/134
router.delete("/:id", controller.deleteItems)

module.exports = router