import express from 'express'
import bcrypt from 'bcryptjs'
import userModel from '../models/userModel.js';

// api endpoints 

const router = express.Router()

router.post("/", (req, res) => {
   const user = req.body

   let salt = bcrypt.genSaltSync(10)
   let hash = bcrypt.hashSync(user.password,salt)

   user.password=hash

   userModel.create(user)
      .then(() => {
         res.send({ message: "successfull" })
      })
      .catch((err) => {
         res.send({ message: "falied to create user" })
      })
})

router.get("/", (req, res) => {
   userModel.find()
      .then((data) => {
         res.send(data)
      })
      .catch((err) => {
         res.send("some error")
      })
})

router.delete("/:id", (req, res) => {
   let id = req.params.id
   // let user=userModel.findById(id)
   // userModel.deleteOne(user).then(() => {
   //    res.send("deleted succesfull ")
   // })
   // .catch((err) => {
   //    res.status(500).send("some error")
   // })})
   userModel.findByIdAndDelete(id)
      .then(() => {
         res.send("deleted succesfull ")
      })
      .catch((err) => {
         res.status(500).send("some error")
      })
})

router.put("/:id", (req, res) => {
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

export default router