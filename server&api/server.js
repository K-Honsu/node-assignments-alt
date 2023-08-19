const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8000;

const handleRequest = (req, res) => {
    if (req.url === '/'){
        const file = fs.readFileSync('./index.html')
        res.setHeader('content-type', 'text/html')
        res.writeHead(200)
        res.write(file)
        res.end()
    }
    if (req.url.endsWith('.html') && req.method == 'GET'){
        try{
            const splitUrl = req.url.split('/')
            const fileName = splitUrl[1]
            const fileLocation = `./${fileName}`

            const file = fs.readFileSync(fileLocation)
            res.setHeader('content-type', 'text/html')
            res.writeHead(200)
            res.write(file)
            res.end()
        }catch(error){
            const file = fs.readFileSync('./404.html')
            res.setHeader('content-type', 'text/html')
            res.writeHead(200)
            res.write(file)
            res.end()
        }
    }
}

const server = http.createServer(handleRequest)

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})