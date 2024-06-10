const express = require('express');
const usersRouter = require('./users.router');

const routes = express.Router();

routes.use('/api/users', usersRouter);

module.exports = routes;
