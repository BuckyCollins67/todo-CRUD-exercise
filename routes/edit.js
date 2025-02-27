//This route will handle editing adn deleting items, as well as rendering the edit page itself.
const TodoTask = require('../models/TodoTask');
const express = require('express')
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit)
router.get('/remove/:id', editController.deleteTask)
router.post('/:id', editController.updateTask)

module.exports = router
