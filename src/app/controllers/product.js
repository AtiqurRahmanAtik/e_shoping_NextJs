import {  NextResponse } from "next/server";
import Product from "../models/product";

// http://localhost:3000/api/product
// createProduct here

  export const CreateProducts = async(req)=>{
       const body = await req.json();

    try{
     
          const newProduct = new Product(body);
    const savedProduct = await newProduct.save();


        return NextResponse.json({ success: true, data: savedProduct }, { status: 201 });
        
      } 


    catch(err){
        console.log('error product api : ',err.message);
    }

}



// get all product api
// http://localhost:3000/api/product

export const getAllProduct = async (req) => {
  const Products = await Product.find();

  return NextResponse.json({
   
    Products
  });
};



// sigle product get api

export const getSingleProduct = async (req, context) => {
  try {
    // ✅ unwrap params safely
    const params = await context.params;
    const id = params.id; // get product ID

    // ✅ Find by ID
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching single product:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
