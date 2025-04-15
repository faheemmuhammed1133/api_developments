import mongoose from "mongoose"

// schema for users 
const userSchema = mongoose.Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   password: { type: String, required: true },
   age: { type: Number, required: true },
   city: { type: String, required: true },
}, { timestamps: true } // creates created at and updated at in your db , u hv 2 create urslf in SQL
)

// model for schema 
const userModel = mongoose.model("users", userSchema)
export default userModel

