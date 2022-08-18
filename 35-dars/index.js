const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const fs = require('fs')
const {v4} = require('uuid')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs') 

app.use(express.static(path.join(path.dirname(__filename), 'public')))

app.use('/', require('./router/route'))

app.listen(5000)

function addID(){
    let data = fs.readFileSync(path.join(path.dirname(__filename), 'data', 'lugat.json'), 'utf-8', (err) => {
        if(err){console.log(err)}
    })
    data = JSON.parse(data)
    
    data.forEach(elem => { if(!Boolean(elem.id)){elem.id = v4()} })
    
    fs.writeFile(path.join(path.dirname(__filename), 'data', 'lugat.json'), JSON.stringify(data, undefined, 4), (err) => {
        if(err){console.log(err)}
    })
}