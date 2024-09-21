// controllers/cartController.js
const Cart = require("../models/cart");

// Create or update a cart
const upsertCart = async (req, res) => {
  try {
    const { user, items } = req.body;
    let cart = await Cart.findOne({ user });

    if (cart) {
      // Update existing cart
      cart.items = items;
      await cart.save();
    } else {
      // Create a new cart
      cart = new Cart({ user, items });
      await cart.save();
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a cart by user ID
const getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate(
      "items.product"
    );
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a cart
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ user: req.params.userId });
    if (!cart) return res.status(404).json({ message: "Cart not found" });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  upsertCart,
  getCartByUserId,
  deleteCart,
};
