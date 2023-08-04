const http = require('http')

const hostname = 'localhost'
const port = 8000

const listener = function(req, res){
    res.writeHead(200)
    res.write('Hello world')
    res.end()
}

// create server
const server = http.createServer(listener)
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})