const path = require('path')
const fs = require('fs')
const {v4} = require('uuid')

let data = fs.readFileSync( path.join( path.dirname(__filename), 'data', 'kitob.json'), 'utf8', (err, data) => {
    if(err){
        console.error(err)
    }else{
        console.error('ok')
    }
} )

data = JSON.parse(data)

function writeFileJson(data){
    fs.writeFile( path.join( path.dirname(__filename), 'data', 'kitob.json' ), JSON.stringify(data, undefined, 4), (err) => {
        if(err){
            console.error(err)
        }else{
            console.error('ok')
        }
    } )
}

function dataAddId(){
    let data = fs.readFileSync( path.join( path.dirname(__filename), 'data', 'kitob.json'), 'utf8', (err, data) => {
        if(err){
            console.error(err)
        }else{
            console.error('ok')
        }
    } )
    data = JSON.parse(data)
    data.forEach(elem => {
        elem.id = v4()
    })
    console.log(data)
    writeFileJson(data)
}
//dataAddId()


function addBook(obj){
    data.push(obj)
    writeFileJson(data)
}
function daleteBook(id){
    data = data.filter(elem => elem.id !== id)
    writeFileJson(data)
}
function updateBook(obj){
    data.forEach(elem => {
        if(elem.id == obj.id){
            elem.name = obj.name ? obj.name : elem.name
            elem.author = obj.author ? obj.author : elem.author
            elem.pages = obj.pages ? obj.pages : elem.pages
            
            console.log('ozgardi')
        }
    })
    writeFileJson(data)
}

updateBook({
    id: '83fdaa2a-d152-4d11-ad05-237841f865a3',
    name: "Frontend Dasturlash",
})

// daleteBook("83fdaa2a-d152-4d11-ad05-237841f865a3")
/*
addBook({
    id: v4(),
    name: "Ufq romani",
    author: "O'tkir Xoshimov",
    pages: 482
})
*/
