const express = require("express");
const {
  getAllSpiritualKits,
  getSpiritualKitById,
} = require("../controllers/spiritualKitController");

const router = express.Router();

router.get("/", getAllSpiritualKits);
router.get("/:id", getSpiritualKitById);

module.exports = router;
