require('colors');
const express = require('express');
const helmet = require('helmet');
const ProjectsRouter = require('./data/router/projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/projects', ProjectsRouter);

module.exports = server;
