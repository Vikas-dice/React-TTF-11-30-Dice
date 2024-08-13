


export const getcountriesfromAPI = async () => {

    let response = await fetch('https://restcountries.com/v3.1/all')
    let data = await response.json()
    return data

    

}

