const express = require('express');
const express = require('helmet');
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.send(`please use the API routes '/api/endpoint' `)
});

module.exports = server;