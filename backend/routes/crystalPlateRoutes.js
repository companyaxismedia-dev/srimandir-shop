const express = require("express");
const CrystalPlate = require("../models/CrystalPlate");

const router = express.Router();

// ✅ GET ALL CRYSTAL PLATES
router.get("/", async (req, res) => {
  try {
    const plates = await CrystalPlate.find();
    res.json(plates);
  } catch (err) {
    console.error("CrystalPlate error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET SINGLE CRYSTAL PLATE BY ID
router.get("/:id", async (req, res) => {
  try {
    const plate = await CrystalPlate.findById(req.params.id);

    if (!plate) {
      return res.status(404).json({ message: "Crystal plate not found" });
    }

    res.json(plate);
  } catch (err) {
    console.error("CrystalPlate ID error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
