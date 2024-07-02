import { createContext } from "react";

 export const initialstate={
    todos:["breakfast","lunch","dinner"],
    addtodo:()=>{},
    deletetodo:(value)=>{},
   editdata:{index:'',data:''},
   edittodo:(index,data)=>{},
   updatetodo:()=>{}
   
  

}


let store=createContext(initialstate)
export default store;

