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
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}),IncidentsController.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object({
       title: Joi.string().required(),
       description: Joi.string().required(),
       value: Joi.number().required(),
    }),
}), celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}),IncidentsController.store);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
       id: Joi.number().required(),
    }),
}),IncidentsController.delete);

/** Profile */
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

/** Sessions */
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
       id: Joi.string().required(),
    }),
}), SessionController.create);

module.exports = routes;