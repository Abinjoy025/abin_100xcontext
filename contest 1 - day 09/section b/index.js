// Q1

// const input=[
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]
// ans={}

// for(i=0;i<input.length;i++){
//     let a=input[i].user;

//     let sum=0
//     for(j=0;j<input.length;j++){
//         if (a==input[j].user){
//             sum=sum+input[j].amount;
//         }
//     }
//     ans[a]=sum;
// }
// console.log(ans)

// Q2

// const input=[
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]
// const ans={}

// for(i=0;i<input.length;i++){
//     let a=input[i].id;
//     let b=input[i].name;
//     ans[a]=b;
// }
// console.log(ans)

// Q3
// const input={ a: 0, b: null, c: "hello", d: undefined, e: 5 }
// const ans={}

// for(let i in input){
//     if (input[i]===null || input[i]===0 || input[i]===undefined){
//         delete input[i]
//     }   
// }
// console.log(input)

// Q4
// const roles={ admin:["read","write"], user:["read"], staff: ["write"]}
// const checkRole="user";
// const action="write";
// let flag=0
// for(let i in roles){
//     if (i===checkRole){
//         for(let j of roles[i]){
//             if (j===action){
//                 flag=1
//             }
//         }
//     }
// }
// if(flag){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// Q5
// const input=[
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]
// ans={}

// for(let i of input){
//     let a=i.category;

//     let sum=0
//     for(let j of input){
//         if (a==j.category){
//             sum=sum+j.price;
//         }
//     }
//     ans[a]=sum;
// }
// console.log(ans)

// Q6
// const input= [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]
// let temp=[]
// k=0
// for(let i of input){
//     let flag=1
//     for(let j of temp){
//         if(i.id===j.id){
//             flag=0
//             let ind=input.indexOf(i)
//             input.splice(k,1)
//         }

//     }
//     if(flag){
//         temp.push(i)
//     } 
//     k++;
// }
// console.log(input)
