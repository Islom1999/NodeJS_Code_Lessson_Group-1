const path = require('path')
const {Router} = require('express')
const router = Router()

router.get('/',( req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../' , 'public', "index.html"))
})
router.get('/about',( req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../' , 'public', "about_us.html"))
})
router.get('/contact',( req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../' , 'public', "contact.html"))
})
router.get('/portfolio',( req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../' , 'public', "portfolio.html"))
})
router.get('/services',( req,res) => {
    res.sendFile(path.join(path.dirname(__filename), '../' , 'public', "services.html"))
})

module.exports = router