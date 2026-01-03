const mongoose = require("mongoose");

const crystalPlateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    mrp: { type: Number, default: 0 },
    discountPercentage: { type: Number, default: 0 },

    category: { type: String, default: "stones" },
    subCategory: { type: String, default: "crystal-plate" },
    material: { type: String, default: "selenite" },
    size: { type: String },

    images: { type: [String], default: [] },

    shortDescription: String,
    description: String,
    benefits: [String],
    tags: [String],

    rating: { type: Number, default: 4.5 },
    reviewsCount: { type: Number, default: 0 },

    isFeatured: { type: Boolean, default: false },
    isBestSeller: { type: Boolean, default: false },

    stock: { type: Number, default: 10 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CrystalPlate", crystalPlateSchema);
