import React from 'react'
import { useCounter } from './useCounter'

export default function App1() {
    let[counter,increment,decrement]=useCounter()
  return (
    <div>App1


<p>Counter : {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>




    </div>
  )
}
