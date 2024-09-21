// models/orderItem.js
const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });

const OrderItem = mongoose.model('OrderItem', orderItemSchema);
module.exports = OrderItem;
