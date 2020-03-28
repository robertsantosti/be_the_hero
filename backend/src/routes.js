const express = require('express');

const routes = express.Router();

routes.post('/users', (req, res) => {
    console.log(req.body);
    return res.json({message: true});
});

module.exports = routes;