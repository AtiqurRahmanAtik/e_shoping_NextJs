import {  NextResponse } from "next/server";
import Branch from "../models/Branch.js";


// post 
export  const CreateBranch= async(req)=> {
  try {
    
    const body = await req.json();

    const branch = new Branch(body);
       const savedBranch = await branch.save();

    return NextResponse.json({ success: true, savedBranch });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}




//get 
export const getAllBranchName = async () => {
  try {
    const BranchName = await Branch.find();
    return NextResponse.json({ success: true, BranchName });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
};
