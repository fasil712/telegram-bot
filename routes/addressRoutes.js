// routes/addressRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressController");

// Address routes
router.post("/", createAddress);
router.get("/", getAllAddresses);
router.get("/:id", getAddressById);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);

module.exports = router;
