import mongoose, { mongo } from "mongoose";

const chatSchema = mongoose.Schema({
   sender: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref : "users"
   },
   receiver: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref : "users"
   },
   message: {
      type: String,
      required: true
   }
}, { timestamps: true })

const chatModel = mongoose.model("chats", chatSchema)

export default chatModel