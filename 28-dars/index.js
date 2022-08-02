const Logger = require('./logger')

const logger = new Logger()

logger.on('massage', (data) => {
    console.log("Data: ", data)
})

logger.log('GET', '/')
logger.log('POST', '/user/login')
logger.log('DELETE', '/post/1584-668-2698-559')