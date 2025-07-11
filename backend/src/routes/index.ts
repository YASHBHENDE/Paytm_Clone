import express from "express"
import userrouter from "./user"
const router = express.Router()


router.use("/user",userrouter)

export default router