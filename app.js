const express = require("express")
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./db/index')
const ProductRouter = require('./routes/products.routes')

const app = express()

dbConnect(app)

app.use(cors({origin: true}))

app.use(express.json())

app.use('/api/v1/products', ProductRouter)

