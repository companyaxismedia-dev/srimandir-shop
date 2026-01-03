const SpiritualKit = require("../models/SpiritualKit");

exports.getAllSpiritualKits = async (req, res) => {
  try {
    const kits = await SpiritualKit.find({ isActive: true });
    res.json(kits);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getSpiritualKitById = async (req, res) => {
  try {
    const kit = await SpiritualKit.findById(req.params.id);
    if (!kit) return res.status(404).json({ message: "Kit not found" });
    res.json(kit);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
