import { CreateBranch, getAllBranchName } from "@/app/controllers/branch";
import connectDb from "@/app/utils/connectDB";



export async function POST(req) {
    await connectDb();
   
   return  CreateBranch(req);
}





export async function GET(req) {
    await connectDb();
   
   return  getAllBranchName();
}
