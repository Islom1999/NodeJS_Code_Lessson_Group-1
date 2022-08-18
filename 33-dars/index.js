const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

app.use('/', require('./router/route'))

app.listen(5000)