const express = require('express')
const cors = require('cors')
const userRouter = require('./router/userRouter')
const app = express()

app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',  // Ensure this matches exactly
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,  // Allow cookies if needed
}));


app.use('/api/users', userRouter)



module.exports = app