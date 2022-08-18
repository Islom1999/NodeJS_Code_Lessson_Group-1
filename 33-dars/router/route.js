const {Router} = require('express')
let books = require('../books')
const router = Router()
router.get('/', (req,res) => {
    res.render('home', 
    { 
        title: 'Home Page',
        books
    })
})
router.get('/about', (req,res) => {
    res.render('about', { title: 'About Page'})
})
router.get('/contact', (req,res) => {
    res.render('contact', 
    { title: 'Contact Page'})
})
module.exports = router