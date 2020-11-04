const { Router } = require('express')

const CategoriesController = require('../controllers/CategoriesController')
const LaunchesController = require('../controllers/LaunchesController')

const routes = Router()

routes.get('/categories', CategoriesController.index)
routes.post('/categories', CategoriesController.store)
routes.get('/categories/:_id', CategoriesController.show)
routes.put('/categories/:_id', CategoriesController.update)
routes.delete('/categories/:_id', CategoriesController.destroy)

routes.get('/launches', LaunchesController.index)
routes.post('/launches', LaunchesController.store)
routes.get('/launches/:_id', LaunchesController.show)
routes.put('/launches/:_id', LaunchesController.update)
routes.delete('/launches/:_id', LaunchesController.destroy)

module.exports = routes
