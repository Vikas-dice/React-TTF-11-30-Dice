import React, { useEffect, useReducer, useState } from 'react'
import reducercomponent from './reducercomponent'

// const reducercomponent=(state,action)=>{
//     console.log(state);
//     console.log(action);

//     if(action.type==="increment"){
//         return state+1;
     


//     }

//     if(action.type==="decrement"){
//        return state-1;

//     }



//     return state;
// }





export default function App() {
    // let[counter,setcounter]=useState(0);

    let[counter,dispatch]=useReducer(reducercomponent,0)




    const increment=()=>{
        // setcounter(counter+1)

        dispatch({
            action:"increment",
            payload:0
        })
      

    
    }
    const decrement=()=>{
        // setcounter(counter-1)
        dispatch({
            action:"decrement",
            payload:0
        })
    }

    // setcounter(10) //componetn update - clas comp - compoowill update -- using useefect with depend

        // useEffect(()=>{
        //     // setcounter(10)

        //     let interval=setInterval(() => {
        //         setcounter(counter+1)
                
        //     }, 1000);
        //    return ()=>clearInterval(interval) //cleanup function
        // },[counter])

        // useEffect(()=>{
        //     // setcounter(counter+1)
        //     setInterval(() => {
        //         setcounter(counter+1)
                
        //     }, 1000);
        // },[counter])

  return (
    <div>App

        <p>Counter : {counter}</p>
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>



    </div>
  )
}
