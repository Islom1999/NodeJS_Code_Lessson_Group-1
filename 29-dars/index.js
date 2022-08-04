const express = require('express')
const path = require('path')
const server = express()

// get =>  /css/style.css
// get =>  /1.jpg
server.use( express.static( path.join( path.dirname(__filename), 'public' ) ) )

server.get('/', (req,res) => {
    res.sendFile( path.join( path.dirname(__filename), 'public', 'index.html' ) )
})

server.listen(5000, () => {
    console.log('Server Run: ', 5000)
})
