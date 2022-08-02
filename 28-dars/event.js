
const EventEmitter = require('events')
class NewEmitter extends EventEmitter{}
const newEmitter = new NewEmitter()

newEmitter.on('salom', () => {
    console.log('salom hodisasi ishladi')
})
newEmitter.on('hello', () => {
    console.log('hello hodisasi ishladi')
})

newEmitter.emit('salom')
newEmitter.emit('hello')
