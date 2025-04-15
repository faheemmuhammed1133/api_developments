import express from 'express'
import {createChat,getConversation} from '../controllers/chatController.js'
const router =express.Router()


router.post("/send",createChat)
router.get("/:loggedId/:friendId",getConversation)

export default router