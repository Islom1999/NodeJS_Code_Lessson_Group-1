const express = require('express')
const path = require('path')
const server = express()

server.get('/', (req,res) => {
    res.sendFile( path.join( path.dirname(__filename), 'public', 'index.html' ) )
})
server.get('/about', (req,res) => {
    res.sendFile(path.join( path.dirname(__filename), 'public', 'about.html'))
})
server.get('/contact', (req,res) => {
    res.sendFile(path.join( path.dirname(__filename), 'public', 'contact.html'))
})
server.listen(5000, () => {
    console.log('Server Run: ', 5000)
})
