const express = require("express")
const path = require('path')
const mongoose = require('mongoose')
const { timeStamp } = require("console")
require('dotenv').config()

const app = express()

mongoose.connect(
    `mongodb+srv://alvarobijarra14_db_user:${process.env.PASSWORD}@cluster0.hxxrqiy.mongodb.net/stock-app?retryWrites=true&w=majority&appName=Cluster0`
).then((result) => console.log("conexion exitosa a la base de datos"))
.catch((err) => console.log(err))

const productSchema = mongoose.Schema({
  name: {type : String, required: true},
  price: Number
},
{ timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())

app.post('/api/v1/products', async (req,res,next) => {
  const newProduct = new Product({
    name: req.body.name,
    price: req.body.price
  })
  await newProduct.save()
  res.status(201).json({ok: true})
})



const PORT = process.env.PORT || 4000

// Levantar servidor en puerto 3000
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});