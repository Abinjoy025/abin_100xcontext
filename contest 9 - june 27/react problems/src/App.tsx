import { useState } from "react"
// import {StatusBadge} from "./Statusbadge"
import {UserProfile} from "./userprofile"
export function App(){
  return <>
    <UserProfile 
    name="Rakul"
    age = "12"
    isOnline = {false}
    avatarUrl="dfjndfjn"
    />
  </>

  
}

export default App





// Q1
// const [visible,setvisible]= useState(true)
//   return <>
//   <input type={visible ? "text" : "password"} />
//   <br />
//   <button onClick={() => setvisible(visible => !visible)}>{visible ? "Hide" : "Show"}</button>
  
//   </>


// Q2
// return<>
//   <StatusBadge 
//   username="Rakul"
//   isOnline={true}
//   />
//   </>

// interface Status{
//     username: string;
//     isOnline: boolean;
// }

// export function StatusBadge({username,isOnline}: Status){
//     return<>
//         <div>{username}</div>
//         <div style={{display: "flex"}}>
//             <div style={{
//                 width:"10px",
//                 height:"10px", 
//                 backgroundColor:(isOnline ? "green":"red"),
//                 borderRadius: "50%",
//                 marginTop: "4px",
//                 marginRight: "4px"
//                 }}>

//             </div>
//             <div>{isOnline ? "Online":"Offline"}</div>
//         </div>
//     </>
// }

// export default StatusBadge



// Q3
// const [like,setlike]=useState(false)
//   const [count,setCount]=useState(50)
//   const [color,setColor]=useState("grey")
//   console.log(color)
//   console.log(count)
//   function whenClicked(){
//     setColor("red")
//     setCount(count => count+1)
//     setlike(like => !like)
//   }
//   function secondclick(){
//     setColor("grey")
//     setCount(count => count-1)
//     setlike(like => !like)
//   }

//   return <>
//   <div style ={{display: "flex"}}>
//       <button style={{
//         backgroundColor: color,

//       }}
//       onClick={like ? secondclick : whenClicked}
//       >
//         {like ? "Liked ❤️" : "likes"}
//       </button>
//       <div style={{paddingLeft: "10px"}}>
//         {count} likes
//       </div>

//     </div>
//   </>


// Q4
// const [count,setCount] = useState(0)

//   function inc(){
//     setCount(count =>count+1)
//   }

//   function de(){
//     setCount(count =>count -1)
//   }

//   function re(){
//     setCount(0)
//   }

//   return <>
//       <div style={{
//         color: (count ? count%2 ? "red" : "green" : "grey")
//       }}>
//         {count}
//       </div>
//       {count<10 ? <button onClick={inc}>+</button>: null}
//       <button onClick={re}>reset</button>
//       {count>-10 ? <button onClick={de}>-</button> : null}
//     </>