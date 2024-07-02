import React from 'react'
import { useCounter } from './useCounter'

export default function App1() {
    let[counter,Increment,Decrement]=useCounter();
  return (
    <div>App1

<p>Counter : {counter}</p>
        <button onClick={Increment}>increment</button>
        <button onClick={Decrement}>Decrement</button>


    </div>
  )
}
