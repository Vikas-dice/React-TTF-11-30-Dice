import React, { useEffect, useState } from 'react'

export default function App() {
    let[counter,setcounter]=useState(0);


    const increment=()=>{
        setcounter(counter+1)
    }
    const decrement=()=>{
        setcounter(counter-1)
    }

    // setcounter(10) //componetn update - clas comp - compoowill update -- using useefect with depend

        useEffect(()=>{
            // setcounter(10)

            let interval=setInterval(() => {
                setcounter(counter+1)
                
            }, 1000);
           return ()=>clearInterval(interval) //cleanup function
        },[counter])

        // useEffect(()=>{
        //     // setcounter(counter+1)
        //     setInterval(() => {
        //         setcounter(counter+1)
                
        //     }, 1000);
        // },[counter])

  return (
    <div>App

        <p>Counter : {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>



    </div>
  )
}
