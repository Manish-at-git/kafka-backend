const Task = require('../models/Task');
const TaskAssignment = require('../models/TaskAssignment');

exports.createTask = async (req, res) => {
  const { projectId, title, description, status } = req.body;
  try {
    const task = await Task.create(projectId, title, description, status);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.assignTask = async (req, res) => {
  const { assignedTo, taskId } = req.body;
  try {
    const taskAssignment = await TaskAssignment.assign(taskId, assignedTo);
    res.status(201).json(taskAssignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllTask = async (req, res) => {
  try {
    const task = await Task.getAll(); // Assuming you have a `getAll` method in your Project model
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
