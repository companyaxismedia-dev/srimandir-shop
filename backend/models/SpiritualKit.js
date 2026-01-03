const mongoose = require("mongoose");

const spiritualKitSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    price: Number,
    mrp: Number,
    discountPercentage: Number,

    category: {
      type: String,
      default: "spiritual-kits",
    },
    subCategory: String,

    festival: [String],
    kitType: String,
    material: String,
    size: String,

    images: [String],

    shortDescription: String,
    description: String,

    itemsIncluded: [String],
    benefits: [String],
    tags: [String],

    rating: Number,
    reviewsCount: Number,

    isFeatured: Boolean,
    isBestSeller: Boolean,
    isActive: {
      type: Boolean,
      default: true,
    },
    stock: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SpiritualKit", spiritualKitSchema);
