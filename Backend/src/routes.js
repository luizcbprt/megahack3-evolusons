const express = require('express');
const routes = express.Router();
const CourseController = require('./controllers/CourseController');
const UserController = require('./controllers/UserController');
const CategoriesController = require('./controllers/CategoriesController');
const RankController = require('./controllers/RankController');
const loginMiddleware = require('./middlewares/login')

// rank
routes.get('/rank',RankController.index );
//categories
routes.post('/categories', CategoriesController.create); // cadastro
routes.get('/categories', CategoriesController.index);// listagem de todos

// users
routes.post('/users', UserController.create); // cadastro
routes.get('/users', UserController.index);// listagem de todos
routes.get('/users/:id', UserController.show); // listagem por id
routes.post('/login', UserController.login); // login no sistema

// courses

routes.post('/courses', CourseController.create); // cadastro
routes.get('/courses', CourseController.index);// listagem de todos
routes.get('/courses/:id', CourseController.show); // listagem por id
routes.get('/courses/category/:category', CourseController.showCategory); // listagem por categoria

module.exports= routes;