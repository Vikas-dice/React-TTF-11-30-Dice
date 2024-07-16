import { configureStore } from "@reduxjs/toolkit";
import restCountriesreducer from './restcountries.reducer'


export const store=configureStore({
    reducer:restCountriesreducer,
 
    devTools:true,
})