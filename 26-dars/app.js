
const fs = require('fs')
const path = require('path')
/*
fs.mkdir( path.join(path.dirname(__filename), 'img'), {}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/

// text/text.txt
/*
fs.writeFile( path.join( path.dirname(__filename), 'text', 'text.txt' ), 'Salom', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/
/*
fs.writeFile( path.join( path.dirname(__filename), 'js', 'script.js' ), 'console.log("Hello")', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/ 

let book = [
    {
        name: 'Nomi',
        page: 253,
    },
    {
        name: 'Nomi',
        page: 253,
    },
    {
        name: 'Nomi',
        page: 253,
    }
]
/*
fs.mkdir( path.join(path.dirname(__filename), 'data'), {}, (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )

fs.writeFile( path.join( path.dirname(__filename), 'data', 'book.json' ), JSON.stringify(book, undefined, 4), (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/ 
/*
fs.appendFile( path.join( path.dirname(__filename), 'data', 'book.json' ), JSON.stringify(book, undefined, 4), (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/

/*
fs.readFile( path.join( path.dirname(__filename), 'data', 'book.json' ), 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
} )

console.log(data)
*/
/*
let data = fs.readFileSync( path.join( path.dirname(__filename), 'data', 'book.json' ), 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log('ok')
    }
} )

data = JSON.parse(data)

data.pop()
data.pop()
console.log(data)

fs.writeFile( path.join( path.dirname(__filename), 'data', 'book.json' ), JSON.stringify(data, undefined, 4), (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('file yaratildi')
    }
} )
*/ 
/*
fs.rename( 
    path.join(path.dirname(__filename), 'data', 'book.json' ), 
    path.join(path.dirname(__filename), 'data', 'kitob.json' ), 
        (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('file ozgartirildi')
        }
    } 
)
*/ 

const os = require('os')

console.log( os.platform() )
console.log( os.arch() )
console.log( os.cpus() )
console.log( os.freemem() )
console.log( os.totalmem() )
console.log( os.uptime() )



