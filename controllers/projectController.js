const Project = require('../models/Project');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  try {
    const project = await Project.create(name, description);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAll(); // Assuming you have a `getAll` method in your Project model
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectTasks = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await Project.getAllTasks(projectId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
