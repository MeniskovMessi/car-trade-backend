const mongoose = require("mongoose");

const OwnershipSchema = new mongoose.Schema({
    make_model: { type: String, required: true },
    age: { type: Number, required: true },
    Previous_Owners: { type: Number, required: true },
    Inspection_new: { type: Boolean, required: true }
});

module.exports = mongoose.model("Ownership", OwnershipSchema);
