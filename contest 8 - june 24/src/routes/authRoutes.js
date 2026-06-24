const express = require("express")
const authRoutes = express.Router()
const {signinController,signupController} = require("../controller/authController")

authRoutes.post("/signup",signupController)

authRoutes.post("/signin",signinController)

module.exports = {
    authRoutes
}