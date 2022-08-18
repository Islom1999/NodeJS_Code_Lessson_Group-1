const {Router} = require('express')

const route = Router()
route.get('/', (req, res) => {
    res.render('home')
})
route.get('/about', (req, res) => {
    res.render('about')
})

route.get('/shop', (req, res) => {
    res.render('shop')
})
route.get('/review', (req, res) => {
    res.render('review')
})
route.get('/blog', (req, res) => {
    res.render('blog')
})
route.get('/contact', (req, res) => {
    res.render('contact')
})
route.get('/:id', (req, res) => {
    res.redirect('/')
})



module.exports = route