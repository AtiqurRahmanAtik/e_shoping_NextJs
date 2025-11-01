import { NextResponse } from "next/server";
import Cart from "@/app/models/Cart.js";



// addtoCart
export const addToCart = async (req) => {
  try {
    const body = await req.json(); // ✅ parse request body
    const newProduct = new Cart(body);
    const savedProduct = await newProduct.save();

    return NextResponse.json({ success: true, data: savedProduct }, { status: 201 });
  } catch (err) {
    console.error("Error adding to cart:", err.message);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};




// getaddToCard

export const getAllCart = async (req) => {
  const Carts = await Cart.find();

  return NextResponse.json({
   
    Carts
  });
};



// clearCart
export const ClearCart = async (req) => {
   await Cart.deleteMany({});

  return NextResponse.json({
   
    message: "Cart has been clear",
    success : true
  });
};
