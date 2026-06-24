require("dotenv").config()
const {Pool} = require("pg")
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})
// const query = "INSERT INTO users (username,password) VALUES ('adifddv','123')";
// async function dbcheck() {
//     await pool.query(query);
// } 
// dbcheck()

module.exports = {
    pool
}