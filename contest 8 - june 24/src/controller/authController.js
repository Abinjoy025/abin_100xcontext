const { pool } = require("../db")
const {signupValid} = require("../types/types")
const bcrypt = require("bcrypt")

async function signupController(req,res){
    const {success,data} = signupValid.safeParse(req.body)
    if(!success){
        res.json({
            "success": false,
            "message": "ID's are not valid"
        })
        return
    }
    const query = `select * from users where username='${data.username}'`
    const ans = await pool.query(query)
    if(ans.rows.length>0){
        res.json({
            "success": false,
            "message": "Username already exists"
        })
        return
    }
    const hashpassword = await bcrypt.hash(data.password,10)
    await pool.query(`insert into users (username,password) values($1,$2) returning id`,[data.username,hashpassword])
    res.status(200).json({
            "success": true,
            "message": "User added successfully"
        })
}

function signinController(req,res){


}


module.exports={
    signinController,
    signupController
}