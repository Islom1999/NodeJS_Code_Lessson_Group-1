const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const books = require('./bookData')

const app = express()
dotenv.config()

// app.use( express.static(path.join( path.dirname(__filename), 'public' )) )

console.log( process.env.PORT )

app.get('/', (req,res) => {
    // res.sendFile(path.join( path.dirname(__filename), 'public', 'index.html' ))
    res.send('home')
})
app.get('/contact', (req,res) => {
    res.send('contact')
})
app.get('/about', (req,res) => {
    res.send('about')
})
app.get('/api/books', (req,res) => {
    res.json(books)
})
app.get('/api/books/:id', (req,res) => {
    const book = books.find(elem => elem.id == req.params.id)
    res.json(book)
})
app.get('/:id', (req,res) => {
    res.send( 'Error 404' )
})

const PORT = process.env.PORT || 3000

app.listen(PORT)


// http://localhost:3000/img/1.jpg
// https://my-travel.uz/img/1.jpg
