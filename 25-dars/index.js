/*
const uuid = require('uuid')

for(let i = 0; i<=10; i++){
    console.log( uuid.v4() )
}
*/
/*
const { v4 } = require('uuid')

for(let i = 0; i<=10; i++){
    console.log( v4() )
}
*/
/*
const path = require('path')
// papka
console.log(path.basename(__dirname))
// file
console.log(path.basename(__filename))

// to'liq addrasi
console.log(path.dirname(__filename))

// fileni formati
console.log(path.extname(__filename))

const fileObj = path.parse(__filename)
console.log(fileObj)
console.log(fileObj.name)
console.log(fileObj.ext)

console.log( path.join(__dirname, 'img', '1.jpg') )
*/ 
/*
let obj = {
    name: "Islom"
}
const {name} = obj
console.log(obj.name)
console.log(name)
*/

const { v4 } = require('uuid')
const path = require('path')

let users = [
    {
        name:'Islom',
        age: 23
    },
    {
        name:'Asilbek',
        age: 17
    },
    {
        name:'Farrux',
        age: 14
    },
    {
        name:'Sobir',
        age: 20
    }
]

users.forEach( elem => {
    elem.id = v4()
} )

//console.log(users)

function imgUpload(imgName){
    users.forEach( (elem, index) => {
        elem.imgName = path.join(__dirname, 'img', imgName[index])
    } )
}
imgUpload([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
])
console.log(users)

