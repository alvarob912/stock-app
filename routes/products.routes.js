const router = require('express').Router()
const Product = require('../models/product')
const productController = require('../controllers/products')

router.post("/", productController.createProduct)
router.get("/", productController.getProducts)
router.delete("/:id", productController.deleteProduct)
router.post("/movement/:productid", productController.createMovement)
router.delete("/movement/:id", productController.deleteMovement)


module.exports = router