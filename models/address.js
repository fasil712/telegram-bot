// models/address.js
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address_line1: { type: String, required: true },
    address_line2: String,
    city: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
