const express = require('express');
const routes = express.Router();
const coursesController = require('./controllers/CourseController');

// courses

routes.post('/courses', coursesController.create);
routes.get('/courses', coursesController.index);

module.exports= routes;