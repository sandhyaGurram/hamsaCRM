let express = require('express')

require('../db')

let Product = require('../modal/productmodal')
let ProductRouting = express.Router()



ProductRouting.get('/product', async (req, res) => {
    let prod = await Product.find()
    if (prod.length > 0) {
        res.send(prod)
    }
    else {
        res.send(`<h4>No data found</h4>`)
    }
})

ProductRouting.post('/product', async (req, res) => {
    let prod = new Product(req.body);
    let result = await prod.save()
    res.send(result)
})



module.exports = ProductRouting;