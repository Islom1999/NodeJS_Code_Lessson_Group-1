const express = require('express')
const dotenv = require('dotenv')
const route = require('./router/route')
const path = require('path')

const server = express()
dotenv.config()

server.use(express.static(path.join(path.dirname(__filename) , 'public')))
server.use('/', route)


const PORT = process.env.PORT || 5000
server.listen( PORT, () => {
    console.log('Server Run : ', PORT)
} )