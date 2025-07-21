// let express = require('express')
// let productRouting = require('./router/productRouting')
// let OrderListRouting = require('./router/OrderListRouting')
// let FBARouting = require('./router/FBARouting')
// let AmezonSelfShipRouting = require('./router/AmezonSelfShipRouting')

// let cors = require('cors')
// let app = express()

// app.use(express.json())
// app.use(cors())
// app.use('/', OrderListRouting)
// app.use('/', productRouting)
// app.use('/', FBARouting)
// app.use('/', AmezonSelfShipRouting)


// app.listen(5000)





require('dotenv').config(); // Load environment variables
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');

let productRouting = require('./router/productRouting');
let OrderListRouting = require('./router/OrderListRouting');
let FBARouting = require('./router/FBARouting');
let AmezonSelfShipRouting = require('./router/AmezonSelfShipRouting');
let MyntraOrderRouting = require('./router/MyntraRouting')
let FlipkartRouting = require('./router/FlipkartRouting')
let app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routing
app.use('/', OrderListRouting);
app.use('/', productRouting);
app.use('/', FBARouting);
app.use('/', AmezonSelfShipRouting);
app.use('/', MyntraOrderRouting)
app.use('/', FlipkartRouting)

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ MongoDB Atlas connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
