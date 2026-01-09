const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const productRoutes = require("./routes/productRoutes");
const stoneRoutes = require("./routes/stoneRoutes");
const crystalPlateRoutes = require("./routes/crystalPlateRoutes");
const spiritualKitRoutes = require("./routes/spiritualKitRoutes");

dotenv.config();

const app = express();

/* ✅ CORS – FIXED FOR LOCAL + VERCEL + DOMAIN */
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://srimandir-shop.vercel.app",
      "https://srimandir.shop",
      "https://www.srimandir.shop",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Sri Mandir Backend Running 🚀");
});

/* MONGODB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected ✅"))
  .catch((err) =>
    console.error("MongoDB connection error ❌", err.message)
  );

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/stones", stoneRoutes);
app.use("/api/crystalplates", crystalPlateRoutes);
app.use("/api/spiritualkits", spiritualKitRoutes);

/* SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
