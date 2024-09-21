// models/shipment.js
const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    shipment_status: { type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending' },
    tracking_number: String,
    delivery_date: Date
}, { timestamps: true });

const Shipment = mongoose.model('Shipment', shipmentSchema);
module.exports = Shipment;
