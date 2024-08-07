
const initialstate={

    countries:[],
    marks:[10,20,30]

}

export const CountryReducer=(state=initialstate,action)=>{
    console.log("coming action ---",action);
    

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


