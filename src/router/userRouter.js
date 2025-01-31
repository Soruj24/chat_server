const { handleGetAllUsers } = require('../controller/userController')

const userRouter = require('express').Router()

userRouter.get('/', handleGetAllUsers)


module.exports = userRouter