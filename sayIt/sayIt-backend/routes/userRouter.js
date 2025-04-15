import express from 'express'
import {searchByUsername,deleteByUsername} from '../controllers/userController.js'
const router =express.Router()


router.get("/search/:username",searchByUsername)
router.delete("/delete/",deleteByUsername)

export default router