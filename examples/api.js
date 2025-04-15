// const http = require('http')

// http.createServer((req,res)=>{

// }).listen(8000,()=>{
//    console.log("Server up and running")
// })

import express from "express";

const app = express();

// app.use(doCheck) // applies for everything / every request

const productsString = [
   {
      id: 1,
      name: "apple"
   },
   {
      id: 2,
      name: "pineapple"
   },
   {
      id: 3,
      name: "banana"
   },
   {
      id: 4,
      name: "carrot"
   }
]

app.get("/products", (req, res) => {
   //  res.send(productsString);
   res.send('all products');
});

app.get("/products/:id", doCheck, (req, res) => {
   // let product = productsString.find((product)=>{
   //    return product.id===Number(req.params.id);
   // })
   // res.send(product);
   res.send("single product");
});

app.post("/products",express.json(), (req, res) => {
   console.log(req.body)
   res.send("product created");
});

// simple middleware
function doCheck(req, res, next) {
   if (req.headers.authorization !== undefined) {
      if (req.headers.authorization === "abc") {
         return next()
      }
   }
   res.end("You are not allowed")

}
/*app.delete("/products/:id", (req, res) => {
    res.send({ status: true, message: "Delete request Successs" });//
});

app.put("/todos", (req, res) => {});

app.patch("/cart", (req, res) => {}); */

app.listen(8000, () => {
   console.log("Server is running");
});