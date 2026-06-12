// Q1

// const fs = require("fs");
// const datas = fs.readFileSync("users.json","utf8");
// const data=JSON.parse(datas)
// fs.writeFileSync("email.txt","")
// for(let i of data){
//     fs.appendFileSync("email.txt",i.email+"\n")
// }

// Q2
// const fs = require("fs");
// const datas = fs.readFileSync("marks.json","utf8");
// const data=JSON.parse(datas)
// let h=0
// let l=100
// let a=0
// for(let i of data){
//     if(h<i.marks){
//         h=i.marks
//     }
//     if(l>i.marks){
//         l=i.marks
//     }
//     a=a+i.marks
// }
// a=a/data.length
// fs.writeFileSync("report.txt","")
// fs.appendFileSync("report.txt","Highest"+h+"\n");
// fs.appendFileSync("report.txt","Lowest"+l+"\n");
// fs.appendFileSync("report.txt","Average"+a+"\n");

// Q3
const fs = require("fs");
const datas = fs.readFileSync("events.txt","utf8");

