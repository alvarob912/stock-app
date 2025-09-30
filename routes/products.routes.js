const router = require('express').Router()
const Product = require('../models/product')
const productController = require('../controllers/products')

router.post("/", productController.createProduct)

router.get("/", productController.getProducts)


module.exports = router