let express = require('express')
let productRouting = require('./router/productRouting')
let OrderListRouting = require('./router/OrderListRouting')

let cors = require('cors')
let app = express()

app.use(express.json())
app.use(cors())
app.use('/', OrderListRouting)
app.use('/', productRouting)

app.listen(5000)