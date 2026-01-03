const Stone = require("../models/Stone");

/**
 * GET /api/stones
 */
exports.getAllStones = async (req, res) => {
  try {
    const stones = await Stone.find().sort({ createdAt: -1 });
    res.json(stones);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/stones/:id
 */
exports.getStoneById = async (req, res) => {
  try {
    const stone = await Stone.findById(req.params.id);
    if (!stone) {
      return res.status(404).json({ message: "Stone not found" });
    }
    res.json(stone);
  } catch (err) {
    res.status(400).json({ message: "Invalid stone ID" });
  }
};
