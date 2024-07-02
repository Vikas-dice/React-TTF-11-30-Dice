

import React, { useState,useMemo } from 'react'

export default function Usememo() {
    let[counter,setcounter]=useState(0)

    const sum=()=>{

        let s=0;
        for(let i=0;i<=10000;i++){
            console.log(i);
            s=s+1;
           

            

        }
        console.log(s);

        return s;
    }

    let t=useMemo(sum,[])
  return (
    <div className='App'>Usememo

<p>{t}</p>
    <p>Counter : {counter}</p>
  
    <button onClick={()=>setcounter(counter+1)}>increment</button>
    {t}
  
    
    
    </div>
  )
}
