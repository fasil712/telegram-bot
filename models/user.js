// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    address: String,
    city: String,
    country: String,
    phone: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
