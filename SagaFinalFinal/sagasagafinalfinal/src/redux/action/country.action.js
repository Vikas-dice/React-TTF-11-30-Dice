

// export const getcountryaction=async()=>{
//     let response=await fetch('https://restcountries.com/v3.1/all')
//    let data=await response.json();

import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constants/country.constants";

//    return{
//     type:"ADD_COUNTRIES",
//     paylaod:data
//    }

// }

// export function getcountrystart(){
//     ({
//         type:GET_COUNTRY_START
//     })

// }

export const getcountrystart=()=>({
    type:GET_COUNTRY_START
})
export const getcountrysucess=(data)=>({
    type:GET_COUNTRY_SUCCESS,
    payload:data
    
})

export const getcountryerror=(error)=>({
    type:GET_COUNTRY_ERROR,
    payload:error
})
// export function getcountrysucess(data){
//     (
//         {
//             type:GET_COUNTRY_SUCCESS,
//             payload:data
//         }
//     )

// }

// export function getcountryerror(){

// }