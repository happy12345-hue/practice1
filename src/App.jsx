


// import {useState} from "react"

// const App=()=>{
//   const[count,setCount]=useState(0);
//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)} disabled={count ===10}>INCREMENT</button>
//     <button onClick={()=>setCount(count-1)} disabled={count=== 1}>DECREMENT</button>
//     </>
//   )
// }

// export default App;

import {useReducer} from "react";
const initialValue = {count:0};
function reducer(state,action){
  switch(action.type){
    case "Increment":
      return {count:state.count+1};
  case "Decrement":
    return {count:state.count-1};
    default:
      return state;
  }
}
const App=()=>{
  const[state,dispatch]=useReducer(reducer,initialValue);
  return(
    <>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"Increment"})} disabled={state.count===10}>INCREMENT</button>
    <button onClick={()=>dispatch({type:"Decrement"})} disabled={state.count===-1}>DECREMENT</button>
    </>
  )
}
export default App;