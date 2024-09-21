// routes/wishlistRoutes.js
const { Router } = require("express");
const router = Router();
const {
  upsertWishlist,
  getWishlistByUserId,
  deleteWishlist,
} = require("../controllers/wishlistController");

// Wishlist routes
router.post("/", upsertWishlist);
router.get("/:userId", getWishlistByUserId);
router.delete("/:userId", deleteWishlist);

module.exports = router;
