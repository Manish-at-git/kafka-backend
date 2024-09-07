const express = require('express');
const { createProject, getProjectTasks, getAllProjects } = require('../controllers/projectController');
const router = express.Router();

router.post('/projects', createProject);
router.get('/projects/:projectId/tasks', getProjectTasks);
router.get('/projects',getAllProjects)

module.exports = router;