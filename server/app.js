let express = require('express')
let productRouting = require('./router/productRouting')
let OrderListRouting = require('./router/OrderListRouting')
let FBARouting = require('./router/FBARouting')
let AmezonSelfShipRouting = require('./router/AmezonSelfShipRouting')

let cors = require('cors')
let app = express()

app.use(express.json())
app.use(cors())
app.use('/', OrderListRouting)
app.use('/', productRouting)
app.use('/', FBARouting)
app.use('/', AmezonSelfShipRouting)


app.listen(5000)