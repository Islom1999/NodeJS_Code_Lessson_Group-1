const {Router} = require('express')
const path = require('path')
const fs = require('fs')

const router = Router()
router.get('/', (req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../', 'public', 'index.html'))
})
router.post('/', (req,res) => {
    let books = fs.readFileSync(path.join(path.dirname(__filename), '../', 'data', 'books.json'), 'utf-8', (err) => {
        if(err) {console.log(err)}
    })
    books = JSON.parse(books)

    books.push({
        name:req.body.name,
        pages:req.body.pages,
        author:req.body.author
    })
    
    fs.writeFile(path.join(path.dirname(__filename), '../', 'data', 'books.json'), JSON.stringify(books, undefined, 4), (err) => {
    if(err) {console.log(err)}})

    res.send('ok')
})
router.post('/delete', (req,res) => {
    let books = fs.readFileSync(path.join(path.dirname(__filename), '../', 'data', 'books.json'), 'utf-8', (err) => {
        if(err) {console.log(err)}
    })
    books = JSON.parse(books)

    console.log(req.body.id)

    books = books.filter(elem => elem.id != req.body.id)

    fs.writeFile(path.join(path.dirname(__filename), '../', 'data', 'books.json'), JSON.stringify(books, undefined, 4), (err) => {
        if(err) {console.log(err)}})
})
module.exports = router