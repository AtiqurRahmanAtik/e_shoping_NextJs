import {  CreateProducts, getAllProduct  } from "@/app/controllers/product.js";



import connectDb from "@/app/utils/connectDB.js";



// http://localhost:3000/api/product

export async function POST(req) {
    await connectDb();
   
   return  CreateProducts(req);
}




// getAllProducts
export async function GET(req) {
    await connectDb();
   
   return  getAllProduct();
}





// export async function GET(req, { params }) {
//   try {
//     await connectDb(); // ✅ connect to MongoDB

//     const { id } = params; // ✅ get the id from dynamic route

//     const product = await Product.findById(id);

//     if (!product) {
//       return NextResponse.json(
//         { success: false, message: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(
//       { success: true, product },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return NextResponse.json(
//       { success: false, message: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }




