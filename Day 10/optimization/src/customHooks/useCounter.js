import { useState } from "react";

export const useCounter=()=>{
    let[counter,setcounter]=useState(0);
    const Increment=()=>{
        setcounter(counter+1)
    }
    const Decrement=()=>{
        setcounter(counter-1)
    }

    return [counter,Increment,Decrement]

}