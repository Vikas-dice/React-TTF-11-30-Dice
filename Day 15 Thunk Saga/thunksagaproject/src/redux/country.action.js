

export const getcountryaction=()=>async(dispatch)=>{

    let response = await fetch("https://restcountries.com/v3.1/all");
    let data = await response.json();

    // console.log(data);


    dispatch({
        type:"ADD_COUNTRY",
        payload:data
    })

    // return{
    //     type:"ADD_COUNTRY",
    //     payload:data
    // }




}