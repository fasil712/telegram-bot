// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    quantity_in_stock: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    brand: String,
    image_url: String,
    ratings: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
