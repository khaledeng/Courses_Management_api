const mongoose=require("mongoose")
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connection With Database Done")
    }catch(err){
        console.log("Connection Failed",err.message)
        process.exit(1)
    }
}
module.exports=connectDB;