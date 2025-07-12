let mongoose = require('mongoose')

let amezonSelfShipSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    customerName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    orderID: {
        type: String,
        required: true,
    },
    awb: {
        type: Number,
        required: true,
    },
    products: {
        type: Array,
        required: true,
    },
    paymentMode: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },

})

module.exports = mongoose.model('AmazonSelfShips', amezonSelfShipSchema)