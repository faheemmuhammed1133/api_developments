import mongoose  from "mongoose";

export default function connectDB(){
   mongoose.connect("mongodb://localhost:27017/messanger")
   .then(()=>{
      console.log("DB connected ")
   })
   .catch((err)=>{
      console.log("some error "+err)
      
   })
}

