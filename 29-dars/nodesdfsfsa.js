
const http = require('http')
const fs = require('fs')
const path = require('path')

const app = http.createServer( (req,res) => {
    
    console.log(req.url)
    console.log(req.method)

    const html = fs.readFileSync( path.join( path.dirname(__filename), 'public', 'index.html' ), 'utf-8', (err) => {
        if(err){ 
            console.log(err)
        }
    } )
    res.writeHead(200, {"content-type": "text/html"})
    res.end(html)
} )

app.listen(5000, () => {
    console.log('server run' )
})


