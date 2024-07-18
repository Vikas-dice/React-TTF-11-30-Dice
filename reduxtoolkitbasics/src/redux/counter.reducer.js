const initialcounter={
    counter:1000
}

export const counterReducer=(state=initialcounter,action)=>{

    console.log(action);

    switch(action.type){
        case "ADD_COUNTER":
            return{
                ...state,
                counter:state.counter+1
            }
        case "DELETE_COUNTER":
            return{
                ...state,
                counter:state.counter-1
            }

            default:
                return state;

    }

   


}