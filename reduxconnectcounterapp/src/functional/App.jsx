import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function Counter() {
    let {counter}=useSelector((state)=>state)
    console.log(counter);
    

    let dispatch=useDispatch();

    const inc=()=>{
        dispatch({
            type:"INCREMENT"
        })
        }

    

        
    

    const dec=()=>{
        dispatch({
            type:"DECREMENT"
        })
        }

    
  return (
    <div>Counter APP USING REDUX

        <p>Counter : {counter}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>




    </div>
  )
}
