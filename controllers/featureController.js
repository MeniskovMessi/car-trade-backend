const Feature = require("../models/Feature");

// Get all features
exports.getAllFeatures = async (req, res) => {
    try {
        const features = await Feature.find();
        res.json(features);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get features by car model
exports.getFeatureByModel = async (req, res) => {
    try {
        const feature = await Feature.findOne({ make_model: req.params.make_model });
        if (!feature) return res.status(404).json({ message: "Features not found" });
        res.json(feature);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new feature
exports.createFeature = async (req, res) => {
    const feature = new Feature(req.body);
    try {
        const newFeature = await feature.save();
        res.status(201).json(newFeature);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
