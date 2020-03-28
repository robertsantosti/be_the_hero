const express = require('express');
const connection = require('./database/connection');

/** Controllers */
const OngsController = require('./controllers/OngsController');

const routes = express.Router();

/** Ongs */
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

module.exports = routes;