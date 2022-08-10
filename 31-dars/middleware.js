const express = require('express')
const dotenv = require('dotenv')

const server = express()
dotenv.config()

const func = (req,res,next) => {
    if(req.url === '/'){
        next()
    }else{
        res.send('yemadi')
    }
}

server.use(func)

server.get('/', (req, res) => {
    res.send('Salom')
})

const PORT = process.env.PORT || 5000
server.listen( PORT, () => {
    console.log('Server Run : ', PORT)
} )