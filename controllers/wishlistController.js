// controllers/wishlistController.js
const Wishlist = require("../models/wishlist");

// Create or update a wishlist
const upsertWishlist = async (req, res) => {
  try {
    const { user, items } = req.body;
    let wishlist = await Wishlist.findOne({ user });

    if (wishlist) {
      // Update existing wishlist
      wishlist.items = items;
      await wishlist.save();
    } else {
      // Create a new wishlist
      wishlist = new Wishlist({ user, items });
      await wishlist.save();
    }

    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a wishlist by user ID
const getWishlistByUserId = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({
      user: req.params.userId,
    }).populate("items.product");
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a wishlist
const deleteWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOneAndDelete({
      user: req.params.userId,
    });
    if (!wishlist)
      return res.status(404).json({ message: "Wishlist not found" });
    res.status(200).json({ message: "Wishlist deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  upsertWishlist,
  getWishlistByUserId,
  deleteWishlist,
};
