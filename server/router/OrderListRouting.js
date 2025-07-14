let express = require('express')



let ProductOrder = require('../modal/OrderListModal')
let OrderListRouting = express.Router()

OrderListRouting.get('/orderlist', async (req, res) => {
    let prod = await ProductOrder.find()
    if (prod.length > 0) {
        res.send(prod)
    }
    else {
        res.send(`<h4>No data found</h4>`)
    }
})

OrderListRouting.post('/orderlist', async (req, res) => {
    let prod = new ProductOrder(req.body);
    let result = await prod.save()
    res.send(result)
})


module.exports = OrderListRouting;