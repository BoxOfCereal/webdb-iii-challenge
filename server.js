const express = require("express");
const helmet = require("helmet");
const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
	res.send(`please use the API routes '/api/endpoint' `);
});

const cohortsRoutes = require("./routes/cohorts");
server.use("/api/cohorts", cohortsRoutes);

const studentsRoutes = require("./routes/students");
server.use("/api/students", studentsRoutes);

module.exports = server;
