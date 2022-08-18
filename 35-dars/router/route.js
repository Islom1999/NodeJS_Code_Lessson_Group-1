const {Router} = require('express')
const path = require('path')
const fs = require('fs')
const {v4} = require('uuid')

const router = Router()

router.get('/', (req,res) => {
    let data = fs.readFileSync(path.join(path.dirname(__filename), '../', 'data', 'lugat.json'), 'utf-8', (err) => {
        if(err){console.log(err)}
    })
    data = JSON.parse(data)

    res.render('home', {
        data
    })
})

router.post('/add', (req,res) => {
    let data = fs.readFileSync(path.join(path.dirname(__filename), '../', 'data', 'lugat.json'), 'utf-8', (err) => {
        if(err){console.log(err)}
    })
    data = JSON.parse(data)

    const {uz, eng} = req.body
    data.push({
        uz,
        eng,
        id: v4()
    })
    fs.writeFile(path.join(path.dirname(__filename), '../', 'data', 'lugat.json'), JSON.stringify(data, undefined, 4), (err) => {
        if(err){console.log(err)}
    })

    res.redirect('/')
})

router.post('/delete/:id', (req,res) => {
    let data = fs.readFileSync(path.join(path.dirname(__filename), '../', 'data', 'lugat.json'), 'utf-8', (err) => {
        if(err){console.log(err)}
    })
    data = JSON.parse(data)

    data = data.filter(elem => elem.id !== req.params.id)

    fs.writeFile(path.join(path.dirname(__filename), '../', 'data', 'lugat.json'), JSON.stringify(data, undefined, 4), (err) => {
        if(err){console.log(err)}
    })

    res.redirect('/')
})


module.exports = router
