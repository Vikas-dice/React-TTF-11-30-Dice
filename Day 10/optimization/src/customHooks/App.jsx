import React, { useState } from 'react'
import { useCounter } from './useCounter'
import App1 from './App1'

export default function App() {

    let[counter,Increment,Decrement]=useCounter()

    
    // let[counter,setcounter]=useState(0);
    // const Increment=()=>{
    //     setcounter(counter+1)
    // }
    // const Decrement=()=>{
    //     setcounter(counter-1)
    // }
  return (
    <div>App
        <p>Counter : {counter}</p>
        <button onClick={Increment}>increment</button>
        <button onClick={Decrement}>Decrement</button>

        <hr/>


        <App1/>



    </div>
  )
}
