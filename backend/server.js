const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoutes");
const stoneRoutes = require("./routes/stoneRoutes"); // ✅ ADD THIS
const crystalPlateRoutes = require("./routes/crystalPlateRoutes");
const spiritualKitRoutes = require("./routes/spiritualKitRoutes");



dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Sri Mandir Backend Running 🚀");
});

/* MONGODB CONNECTION */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected ✅"))
  .catch((err) =>
    console.error("MongoDB connection error ❌", err.message)
  );

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/stones", stoneRoutes); // ✅ ADD THIS
app.use("/api/crystalplates", crystalPlateRoutes);
app.use("/api/spiritualkits", spiritualKitRoutes);



/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
