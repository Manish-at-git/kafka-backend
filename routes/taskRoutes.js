const express = require('express');
const { createTask, assignTask, getAllTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/tasks', createTask);
router.post('/tasks/assign', assignTask);
router.get('/getAllTask', getAllTask)

module.exports = router;