// routes/reviewRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

// Review routes
router.post("/", createReview);
router.get("/", getAllReviews);
router.get("/:id", getReviewById);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

module.exports = router;
