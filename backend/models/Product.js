const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    price: {
      type: Number,
      required: true,
    },

    mrp: {
      type: Number,
      default: 0,
    },

    discountPercentage: {
      type: Number,
      default: 0,
    },

    category: {
      type: String,
      required: true,
      lowercase: true, // stones / bracelets
      trim: true,
    },

    subCategory: {
      type: String,
      lowercase: true, // pyrite / feng-shui
      default: "",
    },

    images: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      default: "",
    },

    shortDescription: {
      type: String,
      default: "",
    },

    tags: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 4.5,
    },

    reviewsCount: {
      type: Number,
      default: 0,
    },

    isFeatured: {
      type: Boolean,
      default: false,
    },

    isBestSeller: {
      type: Boolean,
      default: false,
    },

    stock: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
