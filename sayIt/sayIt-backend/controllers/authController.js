import userModel from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import {SECRET_KEY} from '../constants.js'


// create user /register
export async function register(req, res) {
   let user = req.body

   // encryption 
   let salt = bcryptjs.genSaltSync(10)
   let newPassword = bcryptjs.hashSync(user.password, salt)
   user.password = newPassword

   // sending user to db
   try {
      await userModel.create(user)
      res.status(201).send({ message: "user created " + user.name })
   } catch (err) {
      res.status(500).send({ message: "user already exists " })
   }

}

// login 
export async function login(req, res) {
   let userCreds = req.body

   try {
      let user = await userModel.findOne({ username: userCreds.username })
      if (!user) {
         res.status(404).send({ message: "user not found" })
      } else {
         bcryptjs.compare(userCreds.password, user.password, (err, result) => { // bcrypt compare password, there is hash in usser.password
            if (!err) {
               if (result === true) {
                  // const SECRET_KEY = "12345"
                  let token = jwt.sign({ username: user.username }, SECRET_KEY)
                  res.status(200).send({ token:token ,message: " logined" })
               } else {
                  res.status(401).send({ message: "password incorrect" })
               }
            } else {
               res.status(200).send({ message: "some problem" })
            }
         })

      }
   }
   catch (err) {
      console.log(err)
      res.status(500).send({ message: "Some error" })
   }
   // console.log(userCreds)
   // res.status(200).send("working")

}


// router.use(authMiddleware)

//get user 
// router.get("/:username", authMiddleware,async (req, res) => {
//    // let username = req.params.username
//    // let user = userModel.find(username)
//    // if (user === undefined) {
//    //    res.status(500).send({ message: "user not found with username : " + username })
//    // } else {
//    //    res.status(200).send({ message: "user found " + user })
//    // }
//    res.status(200).send({message:"success"})
// })


// // delete user 
// router.delete("/:username", async (req, res) => {
//    let username = req.params.username
//    let user = userModel.find(username)
//    console.log("user deleted " + user.name)
//    if (user === undefined) {
//       res.status(500).send("user not found with username : " + username)
//    } else {
//       await userModel.deleteOne(user)
//       res.status(200).send({ message: "user deleted with username : " + username })
//    }

// })

