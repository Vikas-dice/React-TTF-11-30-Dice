import React, { useState } from 'react'
import { useCounter } from './useCounter'
import App1 from './App1'

export default function App() {
    let[counter,increment,decrement]=useCounter()
    
  return (

    <>

<div>App

<p>Counter : {counter}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>


<hr/>

<App1/>

    
    </>
  

   
  )
}
