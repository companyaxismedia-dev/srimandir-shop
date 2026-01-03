const Product = require("../models/Product");

/**
 * GET /api/products
 * 👉 ALL products
 */
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/products/:id
 */
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Invalid product ID" });
  }
};

/**
 * GET /api/products/category/:category
 * 👉 stones / bracelets
 */
exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category.toLowerCase();

    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/products/stones
 * 👉 ONLY stones
 */
exports.getStones = async (req, res) => {
  try {
    const stones = await Product.find({ category: "stones" });
    res.json(stones);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/products/featured
 */
exports.getFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.find({ isFeatured: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * GET /api/products/search?q=pyrite
 */
exports.searchProducts = async (req, res) => {
  try {
    const q = req.query.q || "";

    const products = await Product.find({
      name: { $regex: q, $options: "i" },
    });

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
