let express = require('express')

let multer = require('multer');
const path = require('path');

let Image = require('../modal/imageModal')
let ImageRouting = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // folder to save files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


ImageRouting.get('/upload-image', async (req, res) => {
    try {
        const images = await Image.find();
        if (images.length > 0) {
            res.json(images);
        } else {
            res.status(404).send('<h4>No data found</h4>');
        }
    } catch (error) {
        res.status(500).send('Server error');
    }
});

ImageRouting.post('/upload-image', upload.single('image'), async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const newImage = new Image({
            title,
            description,
            image: req.file.filename // Save filename
        });

        const savedImage = await newImage.save();

        res.status(201).json({
            message: 'Image uploaded and saved successfully',
            data: savedImage
        });
    } catch (error) {
        res.status(500).json({ message: 'Upload failed', error: error.message });
    }
});


module.exports = ImageRouting;