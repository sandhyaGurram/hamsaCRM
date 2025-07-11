let express = require('express')

require('../db')

let FBAOrder = require('../modal/FBAModal')
let FBARouting = express.Router()

FBARouting.get('/fbalist', async (req, res) => {
    let prod = await FBAOrder.find()
    if (prod.length > 0) {
        res.send(prod)
    }
    else {
        res.send(`<h4>No data found</h4>`)
    }
})

FBARouting.post('/fbalist', async (req, res) => {
    let prod = new FBAOrder(req.body);
    let result = await prod.save()
    res.send(result)
})


module.exports = FBARouting;