import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    BrandName: { type: String, required: true },
    Category: { type: String, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    discount: { type: Number, required: true },
    rating: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true } // ✅ correct placement
);

// ✅ prevent model overwrite errors in Next.js (hot reload)
const Product = mongoose.models.Gadget || mongoose.model("Gadget", ProductSchema);

export default Product;
