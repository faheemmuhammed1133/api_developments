import userModel from '../models/userModel.js';



export async function searchByUsername(req, res) {
   const username = req.params.username;
   try {
      let users = await userModel.find({ username: { $regex: username, $options: 'i' } }) // i- stands for case insensitive
      if (users.length >  0) {
         res.status(200).send(users)
      } else {
         res.send("User Not Found")
      }
      
   } catch (err) {
      console.log(err)
      res.status(500).send({ message: "Some problem" })
   }
}

export async function deleteByUsername(req, res)  {
      let username = req.params.username
      let user = userModel.find({username:username})
      console.log("user deleted " + user.name)
      if (user === undefined) {
         res.status(500).send("user not found with username : " + username)
      } else {
         await userModel.deleteOne(user)
         res.status(200).send({ message: "user deleted with username : " + username })
      }

   }

