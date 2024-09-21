// routes/categoryRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// Category routes
router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
