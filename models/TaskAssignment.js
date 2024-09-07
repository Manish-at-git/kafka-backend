const pool = require('../config/db');

const TaskAssignment = {
  assign: async (taskId, assignedTo) => {
    const [result] = await pool.query(
      'INSERT INTO TaskAssignments (task_id, assigned_to, assigned_at) VALUES (?, ?, NOW())',
      [taskId, assignedTo]
    );
    return { id: result.insertId, taskId, assignedTo };
  },
};

module.exports = TaskAssignment;
