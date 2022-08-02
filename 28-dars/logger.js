const EventEmitter = require('events')
const {v4} = require('uuid')

class NewEmitter extends EventEmitter{
    log(method, route){
        this.emit('massage', {
            id: v4(),
            method: method,
            route
        })
    }
}
module.exports = NewEmitter