

// export const getCountryAction=async()=>{

import { put, takeLatest } from "redux-saga/effects";
import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constants/countries.constants";


//     let response= await fetch("https://restcountries.com/v3.1/all")

//     let data = await response.json()
   
   
   
//     console.log(data);
   
//   return{
//     type:"ADD_COUNTRIES",
//     payload:data
//   }







// }





function* getcountrystart(){

    yield takeLatest(GET_COUNTRY_START)




}

function* getcountrysuccess(){
    yield takeLatest(GET_COUNTRY_SUCCESS)

}

function* getcountryerror(){
    yield takeLatest(GET_COUNTRY_ERROR)

}