
import { useState } from "react";
export function useCounter(defaultvalue){
    let[counter,setcounter]=useState(defaultvalue? defaultvalue:0);

    const increment=()=>{
        setcounter(counter+1)
    }

    const decrement=()=>{
        setcounter(counter-1);
    }

    return[counter,increment,decrement]


}




