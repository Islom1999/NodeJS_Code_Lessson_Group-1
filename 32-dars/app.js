const express = require('express')
require('dotenv').config()

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}));
server.use('/', require('./router/route'))

const PORT = process.env.PORT || 5000
server.listen(PORT, ()=>{
    console.log('Server run :', PORT)
})