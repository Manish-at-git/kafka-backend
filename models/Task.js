const pool = require('../config/db');

const Task = {
  create: async (projectId, title, description, status) => {
    const [result] = await pool.query(
      'INSERT INTO Tasks (project_id, title, description, status) VALUES (?, ?, ?, ?)',
      [projectId, title, description, status]
    );
    return { id: result.insertId, projectId, title, description, status };
  },
  getAll: async () => {
    try {
      const [rows] = await pool.query('SELECT * FROM Tasks');
      return rows;
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`);
    }
  },
};

module.exports = Task;
