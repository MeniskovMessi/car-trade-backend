require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Corrected middleware for parsing JSON

// Import routes
const carRoutes = require("./routes/carRoutes");
const featureRoutes = require("./routes/featureRoutes");
const ownershipRoutes = require("./routes/ownershipRoutes");
const specificationRoutes = require("./routes/specificationRoutes");
const authRoutes = require("./routes/authRoutes");

// API Routes
app.use("/api/cars", carRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/ownership", ownershipRoutes);
app.use("/api/specifications", specificationRoutes);
app.use("/api/auth", authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 10s
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch(err => {
  console.error("❌ MongoDB Connection Error:", err);
  process.exit(1); // Exit process if MongoDB connection fails
});

// Root route
app.get("/", (req, res) => {
    res.send("🚀 Car Trade API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
