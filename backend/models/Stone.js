const mongoose = require("mongoose");

const stoneSchema = new mongoose.Schema({
  name: String,
  slug: String,
  category: String,
  subCategory: String,
  price: Number,
  mrp: Number,
  discountPercentage: Number,
  stock: Number,
  images: [String],
  description: String,
  shortDescription: String,
  tags: [String],
  isFeatured: Boolean,
});

module.exports = mongoose.model("Stone", stoneSchema);
