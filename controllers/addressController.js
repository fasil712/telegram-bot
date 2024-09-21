// controllers/addressController.js
const Address = require("../models/address");

// Create a new address
const createAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all addresses
const getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find().populate("user");
    res.status(200).json(addresses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get an address by ID
const getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id).populate("user");
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an address
const updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json(address);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an address
const deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createAddress,
  getAllAddresses,
  getAddressById,
  updateAddress,
  deleteAddress,
};
