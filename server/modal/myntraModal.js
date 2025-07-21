const mongoose = require('mongoose');

const MyntraSchema = new mongoose.Schema({
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
    packetId: {
        type: String,
        required: true,
    },
    awb: {
        type: String,
        required: true,
    },
    products: {
        type: String,
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
});

module.exports = mongoose.model('MyntraOrders', MyntraSchema);
