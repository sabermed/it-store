const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
    description: { type: String, required: true },
    isOff: { type: Boolean, required: true },
    offPercentage: { type: Number, required: true, default: 0 },
    productImage: { type: String, required: true },
    isAvailable: { type: Boolean, required: true },
    productImageList: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);