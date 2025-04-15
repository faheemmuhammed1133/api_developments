import express from 'express';
import connectDb from "./dbconnection.js"
import userModel from './models/userModel.js';

const app = express();
connectDb()
app.use(express.json())

// api endpoints 

app.post("/users",(req, res) => {
   const user = req.body
   userModel.create(user)
      .then(() => {
         res.send({ message: "successfull" })
      })
      .catch((err) => {
         res.send({ message: "falied to create user" })
      })
})

app.get("/users",async (req, res) => {
   let users = await userModel.find()
   res.send(users)
      
})

app.delete("/users/:id", (req, res) => {
   let parid = req.params.id
   userModel.findByIdAndDelete(parid)
      .then(() => {
         res.send("deleted succesfull ")
      })
      .catch((err) => {
         res.status(500).send("some error")
      })
})

app.put("/users/:id", (req, res) => {
   let id = req.params.id;
   let user = req.body;
   userModel.findById(id)
      .then((existingUser) => {
         if (existingUser !== null) {
            userModel.findByIdAndUpdate(id, user)
               .then(() => {
                  res.status(404).send({ message: "Updated" })
               })
               .catch((err) => {
                  console.log(err)
                  res.send({ message: "Some problem" })
               })
         } else {
            res.status(404).send({ message: "User not Found" })
         }
      })
      .catch((err) => {
         console.log(err)
         res.send({ message: "Some problem" })
      })
})


app.listen(8000, () => {
   console.log("server is up and running");
})
app.get("/health", (req, res) => {
   res.send({ message: "server up" })
})