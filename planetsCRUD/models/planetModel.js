import mongoose from "mongoose";

const planetSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "name is required"]
   },
   nickname: {
      type: String,
      required: true,
      unique: [true, "nickname already exists"],
      min: [4, "nickname too short"]
   },
   size: {
      type: Number,
      required :true
   },
   nature:{
      type:String,
      enum:[]
      
   }
},{ timestamps: true })

const planetModel= mongoose.model("planets",planetSchema)
export default planetModel