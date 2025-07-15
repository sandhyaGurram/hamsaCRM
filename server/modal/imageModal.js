const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String, // typically store image URL or path
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('images', ImageSchema);
