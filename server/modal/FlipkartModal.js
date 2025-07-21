const mongoose = require('mongoose');

const FlipkartSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    awb: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    payment: {
        type: String,
        enum: ['COD', 'Prepaid', 'UPI', 'Card', 'Other'], // customize as needed
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Returned', 'Cancelled'], // customize as needed
        required: true
    },
    deliveryDate: {
        type: Date,
        required: false // optional, depending on your flow
    }
}, { timestamps: true });

module.exports = mongoose.model('Orders', FlipkartSchema);
