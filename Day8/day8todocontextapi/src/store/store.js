import { createContext } from "react";

export const initialcontext={
    todos:["breakfast","lunch","dinner "]
}


let store=createContext(initialcontext)
export default store;
