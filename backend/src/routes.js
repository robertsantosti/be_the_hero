const express = require('express');
const {celebrate, Segments, Joi} = require('celebrate');

/** Controllers */
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/** Routes **/
const routes = express.Router();

/** Ongs */
routes.get('/ongs', OngsController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),OngsController.store);

/** Incidents */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

/** Profile */
routes.get('/profile', ProfileController.index);

/** Sessions */
routes.post('/sessions', SessionController.create);

module.exports = routes;