const express = require("express");
const Stone = require("../models/Stone");

const router = express.Router();

// ✅ GET ALL STONES
router.get("/", async (req, res) => {
  try {
    const stones = await Stone.find();
    res.json(stones);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET SINGLE STONE BY ID  (🔥 THIS WAS MISSING)
router.get("/:id", async (req, res) => {
  try {
    const stone = await Stone.findById(req.params.id);

    if (!stone) {
      return res.status(404).json({ message: "Stone not found" });
    }

    res.json(stone);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
