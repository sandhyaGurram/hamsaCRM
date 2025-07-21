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

AmezonSelfShipRouting.delete('/amezonselfship/:id', async (req, res) => {
    const id1 = req.params.id;
    let order = await AmezonSelfShip.deleteOne({ _id: id1 })
    res.send(order)
})

AmezonSelfShipRouting.get("/amezonselfship/:id", async (req, res) => {
    const id1 = req.params.id;
    let order = await AmezonSelfShip.findOne({ _id: id1 });
    res.send(order)
})

AmezonSelfShipRouting.put("/amezonselfship/:id", async (req, res) => {
    const id1 = req.params.id;
    let order = await AmezonSelfShip.updateOne({ _id: id1 }, { $set: req.body });
    res.send(order)
})

module.exports = AmezonSelfShipRouting;