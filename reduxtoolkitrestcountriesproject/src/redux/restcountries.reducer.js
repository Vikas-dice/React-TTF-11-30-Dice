 const initialstate={
    countries:[]
}

 const restCountriesreducer=(state=initialstate,action)=>{
    console.log("action coming from ui",action);

    switch(action.type){
        case "ADD_COUNTRIES":
            return{
                ...state,
                countries:[...action.payload]
            }

            default:
                return state;
    }

}


export default restCountriesreducer;