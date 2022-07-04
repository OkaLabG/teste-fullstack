const { Router } = require('express')
const SessionController = require('./app/controllers/SessionController')
const UserController = require('./app/controllers/UserController')

const router = Router()

//users
router.get('/users', UserController.getAll)
router.get('/users/:id', UserController.getById)
router.delete('/users/:id', UserController.delete)
router.post('/users', UserController.create)

//session
router.get('/sessions', SessionController.validateToken)
router.post('/sessions', SessionController.authenticate)

module.exports = router