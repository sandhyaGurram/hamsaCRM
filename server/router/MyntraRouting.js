let express = require('express')



let Product = require('../modal/myntraModal')
let MyntraRouting = express.Router()



// GET all orders
MyntraRouting.get('/myntraorder', async (req, res) => {
    try {
        const prod = await Product.find();
        if (prod.length > 0) {
            res.status(200).json(prod);
        } else {
            res.status(404).send('<h4>No data found</h4>');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// POST a new order
MyntraRouting.post('/myntraorder', async (req, res) => {
    try {
        const prod = new Product(req.body);
        const result = await prod.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});



module.exports = MyntraRouting;