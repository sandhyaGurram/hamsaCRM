let express = require('express')



let AmezonSelfShip = require('../modal/amezonSelfShipModal')
let AmezonSelfShipRouting = express.Router()

AmezonSelfShipRouting.get('/amezonselfship', async (req, res) => {
    let prod = await AmezonSelfShip.find()
    if (prod.length > 0) {
        res.send(prod)
    }
    else {
        res.send(`<h4>No data found</h4>`)
    }
})

AmezonSelfShipRouting.post('/amezonselfship', async (req, res) => {
    let prod = new AmezonSelfShip(req.body);
    let result = await prod.save()
    res.send(result)
})


module.exports = AmezonSelfShipRouting;