const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

const cors = require('cors');

const corsOptions = {
    origin: '*', // Replace with your frontend origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', projectRoutes);
app.use('/api', taskRoutes);

module.exports = app;
