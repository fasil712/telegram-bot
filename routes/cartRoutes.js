// routes/cartRoutes.js
const { Router } = require("express");
const router = Router();
const {
  upsertCart,
  getCartByUserId,
  deleteCart,
} = require("../controllers/cartController");

// Cart routes
router.post("/", upsertCart);
router.get("/:userId", getCartByUserId);
router.delete("/:userId", deleteCart);

module.exports = router;
