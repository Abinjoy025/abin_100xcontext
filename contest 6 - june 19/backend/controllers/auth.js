const {users,courses} = require("../db/index")
const signin = require("../index")
const z = require("zod")

const amountvalid = z.object({
    amount: z.number().nonnegative()
})

function Authe (req,res){
    const result = signin.safeParse(req.body)
    if(!result){
        res.json({
            "success": false,
            "message": "ID are not valid"
        })
        return
    }
    const user = users.find(x => x.username === result.data.username && x.password ===  result.data.password)
    return user
    next()
}

function wadd(req,res){
    const t = req.headers.token
    const user = users.find(x => x.token === t)
    if(!user){
        res.json({
            "success": false,
            "message": "USer not found"
        })
        return
    }
    const amount = amountvalid.safeParse(req,body)
    user["wallet"] = user[wallet]+ Number(amount.data.amount)
    res.json({
        "success": true,
        "wallet": user["wallet"]
    })
}

module.exports=Authe