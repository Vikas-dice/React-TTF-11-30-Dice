import { configureStore } from "@reduxjs/toolkit";
import restCountriesreducer from './restcountries.reducer'



const store=configureStore({
    reducer:restCountriesreducer,
   
   devTools:true
 
    
})

export default store;