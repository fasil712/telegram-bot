// routes/paymentRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
} = require("../controllers/paymentController");

// Payment routes
router.post("/", createPayment);
router.get("/", getAllPayments);
router.get("/:id", getPaymentById);
router.put("/:id", updatePayment);
router.delete("/:id", deletePayment);

module.exports = router;
