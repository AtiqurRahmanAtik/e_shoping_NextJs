import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(

  {
    BrandName: { type: String, required: true },
  
    img: { type: String, required: true },
    title: { type: String, required: true },
   
    price: { type: Number, required: true },
  },

  { timestamps: true } // ✅ correct placement
);


const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

export default Cart;
