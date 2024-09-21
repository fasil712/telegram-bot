// routes/productRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Product routes
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
