// Q1
// const nums= [1,2,3,4];

// const result=nums.map((num) => {
// return num*2;
// });

// console.log(result);

// Q2
const fs = require("fs/promises")
async function main() {
    fs.readFile("a.txt", "utf-8")
        .then((data) => {
            process.stdout.write(data+" ")
            return fs.readFile("b.txt", "utf-8")
        })
        .then((data) => {
            process.stdout.write(data+" ")
            return fs.readFile("c.txt", "utf-8")
        })
        .then((data) => {
           console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })
}
main()