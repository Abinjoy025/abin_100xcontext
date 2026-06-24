const { pool } = require("../db")
const {signinvalid} = require("../types/type")

async function signUpController(req,res){
    const user = signinvalid.safeParse(req.body)
    if (!user.success){
        res.json({
            "success": false,
            "message": "ID's are not valid"
        })
        return
    }
    const query = `Select * from users where username='${user.data.username}'`
    const ans = await pool.query(query)
    console.log(ans)
    if(ans.rows.length>0){
        res.json({
            "success": false,
            "message": "User already exists"
        })
        return
    }
    const userquery = `insert into users (username,password) values('${user.data.username}','${user.data.password}')`
    await pool.query(userquery)
    res.json({
        "success": true,
        "message": "User added successfully"
        })

}





module.exports={
    signUpController
}
