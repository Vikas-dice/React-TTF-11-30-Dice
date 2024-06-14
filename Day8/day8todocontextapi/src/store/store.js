import { createContext } from "react";

export const initialcontext={
    todos:["breakfast","lunch","dinner "],
    addtodo:(value)=>{}
}


let store=createContext(initialcontext)
export default store;
