// controllers/reviewController.js
const Review = require('../models/review');

// Create a new review
const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all reviews
const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate('user').populate('product');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a review by ID
const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id).populate('user').populate('product');
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a review
const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    createReview,
    getAllReviews,
    getReviewById,
    updateReview,
    deleteReview,
  };