// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    payment_method: { type: String, required: true },
    amount: { type: Number, required: true },
    payment_status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
}, { timestamps: true });

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
