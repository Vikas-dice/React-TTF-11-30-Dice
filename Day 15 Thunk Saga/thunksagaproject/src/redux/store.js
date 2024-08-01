import { configureStore } from "@reduxjs/toolkit";
import { CountryReducer } from "./country.reducer";
import { thunk } from "redux-thunk";


const store=configureStore({
    reducer:CountryReducer,
    middleware: getDefaultMiddleware =>getDefaultMiddleware({thunk}),
    devTools:true,

})

export default store;
