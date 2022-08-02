
const url = require('url')

const newUrl = new URL('https://web-platform-group.uz/posters?&category=transport&region=Qarshi')

console.log(newUrl.href)
console.log(newUrl.host)
console.log(newUrl.hostname)
console.log(newUrl.pathname)
console.log(newUrl.search)
console.log(newUrl.searchParams)

newUrl.searchParams.append('from', '5000')

console.log(newUrl)
console.log(newUrl.protocol)