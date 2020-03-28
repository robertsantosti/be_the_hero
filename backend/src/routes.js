const express = require('express');
const connection = require('./database/connection');

/** Controllers */
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/** Routes **/
const routes = express.Router();

/** Ongs */
routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

/** Incidents */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

/** Profile */
routes.get('/profile', ProfileController.index);

/** Sessions */
routes.post('/sessions', SessionController.create);

module.exports = routes;