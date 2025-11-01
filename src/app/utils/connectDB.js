import mongoose from 'mongoose';

const url = process.env.Mongo_URL;


const connectDb = async()=>{

    
mongoose.connect(url, {
        dbName: "E_ShoppingDb"
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err.message));


}



export default connectDb ;