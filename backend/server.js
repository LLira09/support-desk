const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connect = require('./config/db')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the support desk API' })
})

// Routes
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))