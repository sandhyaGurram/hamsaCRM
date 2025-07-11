let express = require('express')
let productRouting = require('./router/productRouting')
let OrderListRouting = require('./router/OrderListRouting')
let FBARouting = require('./router/FBARouting')

let cors = require('cors')
let app = express()

app.use(express.json())
app.use(cors())
app.use('/', OrderListRouting)
app.use('/', productRouting)
app.use('/', FBARouting)


app.listen(5000)