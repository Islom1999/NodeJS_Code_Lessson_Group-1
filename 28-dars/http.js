const http = require('http')

const server = http.createServer((req,res) => {
    /*
    console.log(req.url)
    console.log(req.method)
    res.write('salom')
    res.end()
    */
   if(req.url == '/'){
    res.end('<h1>Home page</h1>')
   }
   if(req.url == '/admin'){
    res.end('<h1>Admin page</h1>')
   }
   if(req.url == '/about'){
    res.end('<h1>About page</h1>')
   }
   if(req.url == '/contact'){
    res.end('<h1>Contact page</h1>')
   }
})
server.listen(3000, () => {
    console.log('Server 3000 portda ishladi')
})