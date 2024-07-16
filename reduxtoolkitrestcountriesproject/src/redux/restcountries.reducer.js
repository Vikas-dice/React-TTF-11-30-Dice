const initialstate={
    countries:[]
}


const restCountriesreducer=(state=initialstate,action)=>{

    switch(action.type){
        case "ADD_COUNTRIES":
            return{
                ...state,
                countries:action.payload
            }

            default:
                return state;
    }

}