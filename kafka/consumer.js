const { Kafka } = require('kafkajs');
const pool = require('../config/db');

const kafka = new Kafka({ clientId: 'task-system', brokers: ['localhost:9090'] });
const consumer = kafka.consumer({ groupId: 'task-group' });

const consume = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'projects', fromBeginning: true });
  await consumer.subscribe({ topic: 'tasks', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const data = JSON.parse(message.value.toString());
      if (topic === 'projects') {
        await pool.query('INSERT INTO Projects (id, name, description) VALUES ($1, $2, $3)', [data.id, data.name, data.description]);
      } else if (topic === 'tasks') {
        await pool.query('INSERT INTO Tasks (id, project_id, title, description, status, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7)', [data.id, data.project_id, data.title, data.description, data.status, data.created_at, data.updated_at]);
      }
    },
  });
};

consume().catch(console.error);