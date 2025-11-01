import { getSingleProduct } from "@/app/controllers/product"; // ✅ named import
import connectDb from "@/app/utils/connectDB.js";

export async function GET(req, context) {
  await connectDb();
  return getSingleProduct(req, context); // ✅ pass req + context (with params)
}
