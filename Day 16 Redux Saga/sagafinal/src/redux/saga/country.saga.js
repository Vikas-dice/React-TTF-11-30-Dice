
export const getcountriesdatafromAPI=async()=>{


    let response=await fetch('https://restcountries.com/v3.1/all')
    return await response.json();





}

