const mongoose = require("mongoose");

const FeatureSchema = new mongoose.Schema({
    make_model: { type: String, required: true },
    Comfort_Convenience: { type: String },
    Entertainment_Media: { type: String },
    Extras: { type: String },
    Safety_Security: { type: String }
});

module.exports = mongoose.model("Feature", FeatureSchema);
