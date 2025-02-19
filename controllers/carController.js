const Car = require("../models/Car");

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        if (!car) return res.status(404).json({ message: "Car not found" });
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new car
exports.createCar = async (req, res) => {
    const car = new Car(req.body);
    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
    try {
        const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCar) return res.status(404).json({ message: "Car not found" });
        res.json(updatedCar);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        if (!deletedCar) return res.status(404).json({ message: "Car not found" });
        res.json({ message: "Car deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
