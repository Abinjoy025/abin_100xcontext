// Q1

// const students= [
//   { name:"Aman", marks:78 },
//   { name:"Riya", marks:91 },
//   { name:"Kabir", marks:65 }
// ];
// let ans=[]
// for(var i of students){
//   let s={}
//   var m=i.marks
//   var n=i.name
//   if(m>=90){
//     s[n]="A"
//   }
//   else if(m>=70){
//     s[n]="B"
//   }
//   else{
//     s[n]="C"
//   }
//   ans.push(s)
// }
// console.log(ans)

// Q2
// const products= [
//   { name:"Laptop", price:80000 },
//   { name:"Mouse", price:500 },
//   { name:"Monitor", price:15000 },
//   { name:"Keyboard", price:1200 }
// ];
// ans=[]
// for(var i of products){
//   if(i.price>5000){
//     ans.push(i)
//   }
// }
// console.log(ans)

// Q3
// const users= [
//   { id:1, email:"a@test.com" },
//   { id:2, email:"b@test.com" },
//   { id:3, email:"a@test.com" },
//   { id:4, email:"c@test.com" }
// ];
// let ans=[]
// let an=[]
// for(var i=0;i<users.length;i++){
//   var t=users[i].email
//   for(var j=i+1;j<users.length;j++){
//     if((t===users[j].email) || (users[j] in an)){
//       ans.push(users[i])
//       ans.push(users[j])
//       an.push(users[i])
//     }
//   }
// }
// console.log(ans)

// Q4
// const students= [
//   { name:"A", branch:"CSE" },
//   { name:"B", branch:"ECE" },
//   { name:"C", branch:"CSE" },
//   { name:"D", branch:"ME" }
// ];
// var ans={}
// students.forEach((u)=>{
//   var t=u.branch
//   if(t in ans){
//     ans[t].push(u.name)
//   }
//   else{
//     ans[t]=[u.name]
//   }
// })
// console.log(ans)

// Q5
// const users= [
//   {
//     name:"Aman",
//     orders: ["Laptop","Mouse"]
//   },
//   {
//     name:"Riya",
//     orders: ["Keyboard"]
//   }
// ];
// const { count } = require("console");
// var ans=[]
// users.forEach((u)=>{
//   for(var i of u.orders){
//     ans.push(i)
//   }
// })
// console.log(ans)

// or
// let ans=users.flatMap(user=>user.orders);
// console.log(ans)

// Q6
// const orders= [
// "Laptop",
// "Mouse",
// "Laptop",
// "Keyboard",
// "Laptop",
// "Mouse"
// ];
// ans={}
// orders.forEach((o)=>{
//   if(o in ans){
//     ans[o]=ans[o]+1
//   }
//   else{
//     ans[o]=1
//   }
// })
// var l=0
// var f={}
// orders.forEach((o)=>{
//   if(ans[o]>l){
//     l=ans[o]
//     f={"product:":o,"count":l}

//   }
// })
// console.log(f)

// Q7
// const users= [
//   {
//     name:"Aman",
//     posts: [
//       { title:"JS", likes:50 },
//       { title:"React", likes:10 }
//     ]
//   },
//   {
//     name:"Riya",
//     posts: [
//       { title:"Node", likes:80 }
//     ]
//   }
// ];
// var f=[]
// var ans=users.filter((u)=>{
//   for(var j of u.posts){
//     if(j.likes>40){
//       var n =u.name
//       f.push(n)
//     }
//   }
// })
// console.log(f)

// Q8
// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Nahh can't read");
//   }
//   else{{}}
//     var l=data.split("\n").length
//     var w=data.split(" ").length
//     var c = data.length;
//     console.log({"lines":l,"words":w,"characters":c-l+1})
// });

// Q9
// const fs = require("fs");
// fs.readFile("users1.json", "utf-8", (err, data1) => {
//   if (err) {
//     console.log("Nahh can't read users1.json");
//   } else {
//     var contents= JSON.parse(data1)
//     fs.readFile("users2.json", "utf-8", function (err, data2) {
//       if (err) {
//         console.log("Nahh not in a mood to read users2.json");
//       } else {
//         var content=JSON.parse(data2)
//         for (var i of content) {
//           contents.push(i);
//         }
//         fs.writeFile("merged.json", JSON.stringify(contents), (err) => {
//           if (err) {
//             console.log("Can't lift pen to write to file merged.json");
//           } else {
//             console.log("Done writing");
//           }
//         });
//       }
//     });
//   }
// });

// Q10
const transactions= [
  { user:"Aman", type:"credit", amount:1000 },
  { user:"Aman", type:"debit", amount:200 },
  { user:"Riya", type:"credit", amount:500 },
  { user:"Riya", type:"debit", amount:100 }
];
var ans={}
transactions.forEach((u)=>{
  var n=u.user;
  if(n in ans){
    if(u.type=="credit"){
      ans[n]=ans[n]+u.amount
    }
    else{
      ans[n]=ans[n]-u.amount
    }
  }
  else{
    if(u.type=="credit"){
      ans[n]=u.amount
    }
    else{
      ans[n]=0-u.amount
    }
  }
})
console.log(ans)