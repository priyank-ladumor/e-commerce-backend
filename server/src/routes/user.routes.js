import express from "express"
import { createUser, loginUser, userEmailVerifiedByToken } from "../controllers/user.controllers.js"
const userRouter = express.Router()

userRouter
    .post("/signup", createUser)
    .post("/signin", loginUser)
    .post("/:token", userEmailVerifiedByToken)

export { userRouter };