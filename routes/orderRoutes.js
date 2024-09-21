// routes/orderRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

// Order routes
router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
