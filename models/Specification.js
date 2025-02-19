const mongoose = require("mongoose");

const SpecificationSchema = new mongoose.Schema({
    make_model: { type: String, required: true },
    hp_kW: { type: Number, required: true },
    Displacement_cc: { type: Number, required: true },
    cons_comb: { type: Number, required: true } // Fuel consumption
});

module.exports = mongoose.model("Specification", SpecificationSchema);
