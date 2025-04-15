import chatModel from "../models/chatModel.js"
import userModel from "../models/userModel.js"

// post
export async function createChat(req, res) {
   let chat = req.body
   try {
      await chatModel.create(chat)
      res.status(201).send({ message: "Chat created" })
   } catch (err) {
      console.log(err)
      res.status(500).send({ message: "try again" })
   }
   console.log("message send")

}


// get 
export async function getConversation(req, res) {

   let loggedId = req.params.loggedId
   let guestId = req.params.friendId

   let user = await userModel.findById(loggedId)
   let friend = await userModel.findById(guestId)

   // let myChats = await chatModel.find({sender:loggedId,receiver:guestId})

   // let guestChats = await chatModel.find({sender:guestId,receiver:loggedId})


   try {

      let conversations = await chatModel.find(
         { //  or functin only works in mongoose not mongodb
            $or: [
               { sender: loggedId, receiver: guestId },
               { sender: guestId, receiver: loggedId }
            ]
         }).sort({ createdAt: 1 })

      var message = []
      for (var i = 0; i < conversations.length; i++) {

         if (conversations[i].sender == loggedId) {
            message += user.name + " : " + conversations[i].message + "\n"
         } else {
            message += friend.name + " : " + conversations[i].message + "\n"
         }
         console.log()
      }
      res.send(message)

   } catch (err) {
      console.log(err)
      res.status(500).send({ message: "Some problem" })
   }



}

