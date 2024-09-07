const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'task-system', brokers: ['localhost:9090'] });

const producer = kafka.producer();

const produceProject = async (project) => {
  await producer.connect();
  await producer.send({
    topic: 'projects',
    messages: [{ value: JSON.stringify(project) }],
  });
  await producer.disconnect();
};

const produceTask = async (task) => {
  await producer.connect();
  await producer.send({
    topic: 'tasks',
    messages: [{ value: JSON.stringify(task) }],
  });
  await producer.disconnect();
};

module.exports = { produceProject, produceTask };