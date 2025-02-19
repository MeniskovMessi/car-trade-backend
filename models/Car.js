const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
    make_model: { type: String, required: true },
    body_type: { type: String, required: true },
    price: { type: Number, required: true },
    vat: { type: String, required: false },
    km: { type: Number, required: true },
    Type: { type: String, required: true }, // Used, New, etc.
    Fuel: { type: String, required: true } // Diesel, Benzine, etc.
});

module.exports = mongoose.model("Car", CarSchema);
