// routes/userRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// User routes
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// Export the router using CommonJS
module.exports = router;
