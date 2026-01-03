// routes/productRoutes.js
const express = require("express");
const {
  getAllProducts,
  getProductsByCategory,
  getFeaturedProducts,
  searchProducts,
  getProductById,
  getStones,
} = require("../controllers/productController");

const router = express.Router();

// ⚠️ ORDER MATTERS (TOP → SPECIFIC, BOTTOM → GENERIC)

router.get("/featured", getFeaturedProducts);
router.get("/search", searchProducts);
router.get("/stones", getStones);              // ✅ ONLY STONES
router.get("/category/:category", getProductsByCategory);
router.get("/:id", getProductById);            // ✅ PRODUCT DETAIL
router.get("/", getAllProducts);               // ✅ ALL PRODUCTS

module.exports = router;
