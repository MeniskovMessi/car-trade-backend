const express = require("express");
const router = express.Router();
const featureController = require("../controllers/featureController");

router.get("/", featureController.getAllFeatures);
router.get("/:make_model", featureController.getFeatureByModel);
router.post("/", featureController.createFeature);

module.exports = router;
