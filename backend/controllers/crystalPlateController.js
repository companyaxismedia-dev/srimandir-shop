const CrystalPlate = require("../models/CrystalPlate");

// ✅ GET ALL CRYSTAL PLATES
exports.getAllCrystalPlates = async (req, res) => {
  try {
    const plates = await CrystalPlate.find({ isActive: true }).sort({
      createdAt: -1,
    });
    res.json(plates);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ GET SINGLE BY ID
exports.getCrystalPlateById = async (req, res) => {
  try {
    const plate = await CrystalPlate.findById(req.params.id);
    if (!plate) {
      return res.status(404).json({ message: "Crystal plate not found" });
    }
    res.json(plate);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// ✅ GET BY SLUG (SEO)
exports.getCrystalPlateBySlug = async (req, res) => {
  try {
    const plate = await CrystalPlate.findOne({
      slug: req.params.slug,
      isActive: true,
    });

    if (!plate) {
      return res.status(404).json({ message: "Crystal plate not found" });
    }

    res.json(plate);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
