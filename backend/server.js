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

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* TEST */
app.get("/", (req, res) => {
  res.send("Sri Mandir Backend Running 🚀");
});

/* DB */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.error(err));

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/stones", stoneRoutes);
app.use("/api/crystalplates", crystalPlateRoutes);
app.use("/api/spiritualkits", spiritualKitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
