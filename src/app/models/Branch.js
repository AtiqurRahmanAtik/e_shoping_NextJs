import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema(
  {
    
branchName: { type: String, required: true },
    
address: { type: String, required: true },
   
phoneSales: { type: String, required: true },
    
phoneService: { type: String, required: true },
  
mapLink: { type: String, required: true },
   
detailsLink: { type: String, required: true },
  
  },

  { timestamps: true } // ✅ correct placement
);

// ✅ prevent model overwrite errors in Next.js (hot reload)
const Branch = mongoose.models.Branch || mongoose.model("Branch", BranchSchema);

export default Branch;
