require('dotenv').config()
const express = require('express')

const logRequestMiddleware = require('./middleware/logs')
const errorHandler = require('./middleware/error-handler')

const userRouter = require('./router/users')
const kategoriRouter = require('./router/kategori')

const app = express()
const port = process.env.PORT || 5000

app.use(logRequestMiddleware)
app.use(express.json())

app.use('/users', userRouter)
app.use('/kategori', kategoriRouter)

app.use(errorHandler.logErrors)
app.use(errorHandler.clientErrorHandler)
app.use(errorHandler.errorHandler)

app.listen(port, () => {
    console.log(`Server Sales-Provi Berjalan di Port ${port}`)
})