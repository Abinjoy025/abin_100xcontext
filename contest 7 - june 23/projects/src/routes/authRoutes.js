const express = require("express")
const router = express.Router()

const {signUpController} = require("../controller/authControllers")

router.post("/signup",signUpController)


module.exports = {
    router
}