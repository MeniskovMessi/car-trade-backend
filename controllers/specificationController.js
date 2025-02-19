const Specification = require("../models/Specification");

// Get all specifications
exports.getAllSpecifications = async (req, res) => {
    try {
        const specifications = await Specification.find();
        res.json(specifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get specifications by car model
exports.getSpecificationByModel = async (req, res) => {
    try {
        const specification = await Specification.findOne({ make_model: req.params.make_model });
        if (!specification) return res.status(404).json({ message: "Specifications not found" });
        res.json(specification);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new specification
exports.createSpecification = async (req, res) => {
    const specification = new Specification(req.body);
    try {
        const newSpecification = await specification.save();
        res.status(201).json(newSpecification);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
