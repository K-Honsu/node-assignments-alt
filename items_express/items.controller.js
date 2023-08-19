const items = [];

const GetItems = (req, res) => {
    const query = req.query

    let itemsArrayDuplicate = items;
    if (query.size) {
        itemsArrayDuplicate = itemsArrayDuplicate.filter(itm => itm.size.includes(query.size))
    }

    if (query.limit) {
        itemsArrayDuplicate = itemsArrayDuplicate.slice(0, req.limit - 1)
    }


    res.status(200).json({
        data: itemsArrayDuplicate,
        error: null
    })
}

const CreateItems = (req, res) => {

    const item = req.body;
    const randomId = Math.floor(Math.random() * 500).toString(); // Generate a random ID
    items.push({...item, id:randomId})

    return res.status(201).json({
        data: items,
        error: null
    })
}

const getOneItem = (req,res)=>{
    const id = req.params.id 
    const foundItem = items.find((item)=>{
        return item.id == parseInt(id)
    })
    if(!foundItem){
        res.status(404).send(`Item not found`)
    }
    res.status(200).json(foundItem)
}

const updateItem = (req, res)=>{
    const id = req.params.id
    const update = req.body
    const foundIndex = items.findIndex(item=>item.id == parseInt(id))
    if(foundIndex== -1){
        res.end(`item with id ${id} is not found`)
        return
    }
    items[foundIndex] = {...items[foundIndex], ...update}
    res.status(200).json(items[foundIndex])
}

const deleteItems = (req,res)=>{
    const id = req.params.id
    const foundIndex = items.findIndex(item=>item.id == parseInt(id))
    if(foundIndex== -1){
        res.end(`item with id:${id} is not found`)
        return
    }
    items.splice(foundIndex, 1)
    res.end(`item with id:${id}, deleted successfully`)
}


module.exports = {
    GetItems,
    CreateItems,
    getOneItem,
    updateItem,
    deleteItems
}