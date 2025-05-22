const express = require('express')
const userRouter = express.Router()

//controller
const {register, login, getCurrentUser, updated, getUserById} = require("../controllers/UserController")

//middlewares
const validate = require("../middlewares/handleValidation")
const {userCreateValidation, loginValidation, userUpdateValidation} = require("../middlewares/userValidations")
const authGuard = require("../middlewares/authGuard")

//Routes

//Post
userRouter.post("/register", userCreateValidation(), validate, register)
userRouter.post("/login", loginValidation(), validate, login)
userRouter.post("/addHome", validate)

//Get
userRouter.get("/profile", authGuard, getCurrentUser)
userRouter.get("/:id",getUserById )

//put
module.exports = userRouter