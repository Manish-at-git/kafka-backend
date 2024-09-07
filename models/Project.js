const pool = require('../config/db');

const Project = {
  create: async (name, description) => {
    const [result] = await pool.query(
      'INSERT INTO Projects (name, description) VALUES (?, ?)',
      [name, description]
    );
    console.log(name, description, "name, description")
    return { id: result.insertId, name, description };
  },
  getAll: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM Projects');
      return rows;
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  },
  getAllTasks: async (projectId) => {
    const [rows] = await pool.query(
      'SELECT * FROM Tasks WHERE project_id = ?',
      [projectId]
    );
    return rows;
  },
};

module.exports = Project;
