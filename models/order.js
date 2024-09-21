// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },
    total_amount: { type: Number, required: true },
    shipping_address: String,
    payment_method: String,
    order_items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }]
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
