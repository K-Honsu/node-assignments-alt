const http = require('http')

const port = 8000

const items = []


const handleResponse = (req, res) => ({code=200, error = null, data = null}) => {
    res.setHeader('content-type', 'application/json')
    res.writeHead(code)
    res.write(JSON.stringify({data, error}))
    res.end()
}

const bodyParser = (req, res, callback) => {
    const body = []
    req.on('data', (chunk)=> {
        body.push(chunk)
    })
    req.on('end', () => {
        if(body.length){
            const parseBody = Buffer.concat(body).toString()
            console.log({parseBody})
            req.body = JSON.parse(parseBody)
            console.log({jsrequestbody:req.body})
        }
        callback(req, res)
    })
}

const handleRequest = (req, res) => {
    const response = handleResponse(req, res)
    // this route sends a post request and register all items in the item array
    if (req.url === '/v1/items' && req.method == 'POST'){
        items.push({...req.body, id:Math.floor(Math.random() * 500).toString()})
        return response({data:items, code:201})
    }
    // this route gets all items in the registered
    if (req.url === '/v1/items' && req.method === 'GET'){
        return response({data:items, code:200})
    }
    // this route gets the specific item based on id
    if (req.url.startsWith('/v1/items/') && req.method === 'GET'){
      const id = req.url.split('/')[3]
      const itemIdx = items.findIndex((item) => item.id === id)
      if (itemIdx === -1){
        return response ({code:404, error:'Item not found'})
      }
      const item = items[itemIdx]
      return response({data:item, code:200})
    }
    // this route updates a specific item in the item array
    if(req.url.startsWith('/v1/items/') && req.method === 'PATCH'){
        const id = req.url.split('/')[3]
        const itemIdx = items.findIndex((item) => item.id === id)
        if (itemIdx === -1){
            return response({code:404, error:'Item not found'})
        }
        const item = [...item[itemIdx], ...req.body]
        item.splice(itemIdx, item)
        return response({data:item, code:200})
    }
    // this route delete the item based on the index passed to it
    if (req.url.startsWith('/v1/items/')&&req.method == 'DELETE'){
        const id = req.url.split('/')[3]
        const itemIdx = items.findIndex((item) => item.id === id)
        if (itemIdx === -1){
            return response({code:404, error:'Item not found'})

        }
        items.splice(itemIdx, 1)
        return response({data:items, code:200})
    }
}

const server = http.createServer((req, res) => bodyParser(req, res, handleRequest))

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
