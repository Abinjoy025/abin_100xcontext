const z= require("zod")


const signinvalid = z.object({
    username:z.string(),
    password: z.string()
})

module.exports={
    signinvalid
}