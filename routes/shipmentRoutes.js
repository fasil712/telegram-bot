// routes/shipmentRoutes.js
const { Router } = require("express");
const router = Router();
const {
  createShipment,
  getAllShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
} = require("../controllers/shipmentController");

// Shipment routes
router.post("/", createShipment);
router.get("/", getAllShipments);
router.get("/:id", getShipmentById);
router.put("/:id", updateShipment);
router.delete("/:id", deleteShipment);

module.exports = router;
