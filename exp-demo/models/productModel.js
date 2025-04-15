import mongoose from "mongoose"

// schema for users 
const productSchema = mongoose.Schema({
   name: { type: String, required: true },
   price: { type: Number, required: true },
   category: { type: String, required: true },
   brand: { type:String, required: true },
   
}, { timestamps: true } // creates created at and updated at in your db , u hv 2 create urslf in SQL
)

// model for schema 
const productModel = mongoose.model("products", productSchema)
export default productModel
