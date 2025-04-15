import  express  from "express";
import connectDB from "./dbConnection.js";
import authRouter from './routes/authRouter.js'
import userRouter from './routes/userRouter.js'
import chatRouter from './routes/chatRouter.js'
import authMiddleware from "./middlewares/authMiddleware.js";
import cors from "cors"
connectDB()
const app =express();

// allows to connect all origin to acces backend by default
app.use(cors())

//inbuilt middlewares
app.use(express.json())



// private 
app.use("/auth",authRouter)

// authMiddleware
app.use(authMiddleware)

// private router
app.use("/users",userRouter)
app.use("/chat",chatRouter)

app.listen(8000,()=>{
   console.log("server up running at port 8000")
})