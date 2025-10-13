const mongoose = require('mongoose')

const movementSchema = mongoose.Schema({
    type: String, // Compra o venta
    quantity: Number,
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    deleted: {type: Boolean, default: false}
},
{ timestamps: true }
)

const Movement = mongoose.model('Movement', movementSchema)

module.exports = Movement