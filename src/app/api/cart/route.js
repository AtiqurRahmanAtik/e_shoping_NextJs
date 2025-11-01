import { addToCart, ClearCart, getAllCart } from "@/app/controllers/Cart";
import connectDb from "@/app/utils/connectDB";

export async function POST(req) {
  try {
    await connectDb();
    return addToCart(req);
  } catch (err) {
    console.error("POST /api/cart error:", err.message);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}



// getCart here
// http://localhost:3000/api/cart
export async function GET(req) {
    await connectDb();
   
   return  getAllCart();
}



// deleteCart
export async function DELETE(req) {
    await connectDb();
   
   return  ClearCart(req);
}
