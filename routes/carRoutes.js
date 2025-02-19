const express = require("express");
const router = express.Router();
const carController = require("../controllers/carController");
// const authenticateToken = require("../middleware/auth"); // ❌ Comment this out

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);

// ❌ Remove authentication middleware for now
router.post("/", /* authenticateToken, */ carController.createCar);
router.put("/:id", /* authenticateToken, */ carController.updateCar);
router.delete("/:id", /* authenticateToken, */ carController.deleteCar);

module.exports = router;
