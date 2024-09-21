// controllers/productController.js
const Product = require('../models/product');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('category').populate('reviews');
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('category').populate('reviews');
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  };