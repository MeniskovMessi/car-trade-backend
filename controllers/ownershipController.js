const Ownership = require("../models/Ownership");

// Get all ownership records
exports.getAllOwnerships = async (req, res) => {
    try {
        const ownerships = await Ownership.find();
        res.json(ownerships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get ownership details by car model
exports.getOwnershipByModel = async (req, res) => {
    try {
        const ownership = await Ownership.findOne({ make_model: req.params.make_model });
        if (!ownership) return res.status(404).json({ message: "Ownership details not found" });
        res.json(ownership);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new ownership record
exports.createOwnership = async (req, res) => {
    const ownership = new Ownership(req.body);
    try {
        const newOwnership = await ownership.save();
        res.status(201).json(newOwnership);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
