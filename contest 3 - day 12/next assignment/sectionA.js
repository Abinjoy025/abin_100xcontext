// const players = [
//   { name: "Aman", score: 320 },
//   { name: "Riya", score: 410 },
//   { name: "Kabir", score: 410 },
//   { name: "Arjun", score: 250 },
//   { name: "Sneha", score: 320 }
// ];

// for(var i=0;i<players.length-1;i++){
//     te= players[i].score
//     t= players[i+1].score
//     if (te<t){
//         temp=players[i]
//         players[i]=players[i+1]
//         players[i+1]=temp
//     }
// }
// var r=0
// var t=0
// for(var i=0;i<players.length;i++){
//     if (i==0){
//         r=r+1
//         players[i]["rank"]=r
//     }
//     else{
//         if(players[i].score==players[i-1].score){
//             players[i]["rank"]=r
//             t=t+1
//         }
//         else{
//             r=r+t
//             r=r+1
//             players[i]["rank"]=r
//             t=0
//         }
//     }
// }
// console.log(players)


// Q3
// const branchStudents = {
//   CSE: ["Aman", "Riya"],
//   ECE: ["Kabir"],
//   ME: ["Arjun", "Sneha"]
// };
// ans={}
// for(var i in branchStudents){
//     for(var j of branchStudents[i]){
//         ans[j]=i
//     }
// }
// console.log(ans)

// Q3
// const cart = [
//   { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
//   { name: "Mouse", price: 500, qty: 2, category: "electronics" },
//   { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
// ];

// const coupons = {
//   electronics: 0.10,   // 10% off
//   fashion: 0.20        // 20% off
// };
// var p=0
// for(var i of cart){
//     var t=i.category;
//     var c=1-coupons[t];
//     p=p+((i.price)*c)*i.qty;
// }
// console.log("Final Amount: "+p)


Q4
// const orders = [
//   "Laptop", "Mouse", "Laptop", "Keyboard",
//   "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"
// ];



// Q5
// const colleges = [
//   {
//     name: "MITS",
//     departments: [
//       { name: "CSE", students: [{ name: "A", cgpa: 8.2 }, { name: "B", cgpa: 9.1 }] },
//       { name: "ECE", students: [{ name: "C", cgpa: 7.5 }] }
//     ]
//   },
//   {
//     name: "NIT",
//     departments: [
//       { name: "ME", students: [{ name: "D", cgpa: 8.8 }, { name: "E", cgpa: 6.9 }] }
//     ]
//   }
// ];
// let a=[]
// ans = colleges.map((u)=>{
    
//     for(var i of u.departments){
//         for(var j of i.students){
//             if (j.cgpa>=8){
//                 var t= {"name":j.name,"cgpa":j.cgpa,"college":u.name,"dept":j.name}
//                 a.push(t)
//             }
//         }
//     }
// })
// console.log(a)