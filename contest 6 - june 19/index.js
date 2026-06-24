const express = require("express")
const app = express()
const z = require("zod")
const users = require("./backend/db/index")
const courses = require("./backend/db/index")
const suser = require("./backend/controllers/auth")

app.use(express.json())

const signvalid=z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    role: z.enum(['user','admin'])
})

const signin=z.object({
    username: z.string().min(3),
    password: z.string().min(6)
})

let id=1


app.post("/signup",(req,res)=>{
    const result = signvalid.safeParse(req.body)
    if(!result){
        res.json({
            "success":false,
            "message": "Given ID are not valid"
        })
        return
    }
    const token = Math.random().toString()

    let user={}
    user["id"]=String(id)
    user["username"]=result.data.username;
    user["password"]=result.data.password
    user["role"]=result.data.role
    user["purchasedCourses"]=[]
    user["token"]=token
    users.push(user)
    res.status(201).json({
        "success": true,
        "message": "Signup successful",
        "token": token
    })
})

app.post("signin",suser,(req,res)=>{
    if(!suser){
        res.json({
            "success": false,
            "message": "User not found"
        })
    }
    token = Math.random().toString()
    user["token"]=token
    res.status(200).json({
        "success": true,
        "message": "Signin Successful",
        "token": token
    })
})


app.post("/wallet/add",(req,res)=>{
    
})

module.exports=signin