// controllers/shipmentController.js
const Shipment = require('../models/shipment');

// Create a new shipment
const createShipment = async (req, res) => {
    try {
        const shipment = new Shipment(req.body);
        await shipment.save();
        res.status(201).json(shipment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all shipments
const getAllShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find().populate('order');
        res.status(200).json(shipments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a shipment by ID
const getShipmentById = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id).populate('order');
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
        res.status(200).json(shipment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a shipment
const updateShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
        res.status(200).json(shipment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a shipment
const deleteShipment = async (req, res) => {
    try {
        const shipment = await Shipment.findByIdAndDelete(req.params.id);
        if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
        res.status(200).json({ message: 'Shipment deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
module.exports = {
    createShipment,
    getAllShipments,
    getShipmentById,
    updateShipment,
    deleteShipment,
  };