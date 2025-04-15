import express from 'express';
import connectDb from "./dbconnection.js"
import userRouter from './controllers/userController.js'
import productRouter from './controllers/productController.js'


const app = express();
connectDb()
app.use(express.json())
app.use("/users",userRouter)
app.use("/products",productRouter)



app.listen(8000, () => {
   console.log("server is up and running");
})
app.get("/health", (req, res) => {
   res.send({ message: "server up" })
})