const express = require("express")
const app = express()
const {authRoutes} = require("./routes/authRoutes")
app.use(express.json())

app.get("/",(req,res)=>{
    res.send('Hello World')
})

app.use("/auth", authRoutes)

app.listen(3000)