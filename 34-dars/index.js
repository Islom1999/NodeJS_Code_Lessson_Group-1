const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')

const server = express()

server.use(express.json())
server.use(express.urlencoded({extended: false}))

server.engine('.hbs', engine({extname: '.hbs'}))
server.set('view engine', '.hbs') 

server.use(express.static(path.join(path.dirname(__filename), 'public')))

server.use('/', require('./router/route'))

server.listen(5000)