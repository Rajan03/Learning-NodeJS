const express = require('express');
const app = express();
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
// routes
route.get('/', services.homeRoutes);

// APIs
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update); // URL Parameters
route.delete('/api/users/:id', controller.delete);
module.exports = route;
