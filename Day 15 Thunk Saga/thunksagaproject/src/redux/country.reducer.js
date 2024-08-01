const initialstate={
    countries:[]
}


export const CountryReducer=(state=initialstate,action)=>{
    console.log("coming actionn",action);

    switch(action.type){

        case "ADD_COUNTRY":
            return{

                ...state,
                countries:[...action.payload]
            }

        default:

        
    return state;

    }



}