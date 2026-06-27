const z = require("zod")

const signupValid = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(3)
})

const signinValid = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(3)
})

module.exports = {
    signupValid,
    signinValid
}