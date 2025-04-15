import mongoose from "mongoose";

const userSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "name is required"]
   },
   username: {
      type: String,
      required: true,
      unique: [true, "Username already exists"],
      min: [4, "Username too short"]
   },
   password: {
      type: String,
      required: true
   },
   gender: {
      type: String,
      enum: ["Male", "Female"],
   },
   people: [
      {
         type: mongoose.Schema.Types.ObjectId, 
         ref: "users"
      }
   ],
   profilePic: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&s",
   },
}, { timestamps: true })

const userModel = mongoose.model("users", userSchema)

export default userModel