import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter.reducer";


export const store=configureStore({
    reducer:counterReducer,

   
    devTools:true,
})

