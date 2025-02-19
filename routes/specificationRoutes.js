const express = require("express");
const router = express.Router();
const specificationController = require("../controllers/specificationController");

router.get("/", specificationController.getAllSpecifications);
router.get("/:make_model", specificationController.getSpecificationByModel);
router.post("/", specificationController.createSpecification);

module.exports = router;
