let mongoose = require('mongoose')

let FBASchema = new mongoose.Schema({
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
    orderID: {
        type: String,
        required: true,
    },
    products: {
        type: [String],
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
    status: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('FBAs', FBASchema)