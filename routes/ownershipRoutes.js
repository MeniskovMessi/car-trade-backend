const express = require("express");
const router = express.Router();
const ownershipController = require("../controllers/ownershipController");

router.get("/", ownershipController.getAllOwnerships);
router.get("/:make_model", ownershipController.getOwnershipByModel);
router.post("/", ownershipController.createOwnership);

module.exports = router;
