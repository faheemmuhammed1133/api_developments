import mongoose from "mongoose";

// create connection
mongoose.connect("mongodb://localhost:27017/btechpracs")
   .then(() => {
      console.log("mongo connectioin successfull")
   })
   .catch((err) => {
      console.log("connection error " + err)
   })

// create schema 
const productSchema = mongoose.Schema({
   name: {
      type: String, required: true
   },
   price: {
      type: Number, required: true
   },
   category: {
      type: String, required: true
   },
   brand: {
      type: String, required: true
   }
})

// create model object -- schema doesn't know why/for what it has creaetd for

const productModel = mongoose.model("products", productSchema)


//inserting a document 

// productModel.create({name:"Iphone 14",price:88000,category:"Mobile",brand:"Apple"})
// .then(()=>{
//    console.log("created")
// })
// .catch((err)=>{
//    console.log("error"+err)
// })

//fetch docs

// productModel.find()
// .then((data)=>{
//    console.log(data)
// })
// .catch((err)=>{
//    console.log(err)
// })

// find one/fetch one

// productModel.find({name:"Iphone 14"})
// .then((data)=>{
//    console.log(data)
// })
// .catch((err)=>{
//    console.log(err)
// })

// deleteOne

// productModel.deleteOne({name:"Iphone 14"})
// .then(()=>{
//    console.log("deletion succesfull ")
// })
// .catch((err)=>{
//    console.log(err)
// })

//update 

productModel.updateMany({category:"Mobile"},{price:2000})
.then(()=>{
   console.log("updated")
})
.catch((err)=>{
   console.log(err)
})