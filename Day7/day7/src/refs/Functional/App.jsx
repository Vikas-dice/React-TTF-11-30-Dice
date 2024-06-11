import React, { useRef } from 'react'

export default function App() {
    let inputref=useRef()


    const buttonclicked=()=>{
        // console.log(" button clcik fire ");
        // console.log(inputref);
        console.log(inputref.current.value);
        console.log(inputref.current.value.length);
        if(inputref.current.value.length==0){
            inputref.current.style.borderColor="red";
        }
        

    }
    
  return (
    <div>App
        <input type="text" ref={inputref} />
       
        <button onClick={buttonclicked}>click me </button>



    </div>
  )
}
