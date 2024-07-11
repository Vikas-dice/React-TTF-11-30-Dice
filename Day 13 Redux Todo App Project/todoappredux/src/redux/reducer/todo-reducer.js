const initialstate={
    todos:["breakfast","lunch","dinner","brunch","munch"]
   
}


export const TodoReducer=(state=initialstate,action)=>{
    console.log("actionnnnnnn",action);
    switch(action.type){
        case "ADD_TODO":{
            
          return {
            ...state,
            todos:[...state.todos,action.payload]
          }
          break;
        }
        case "DELETE_TODO":
            let filterdata=state.todos.filter((todo)=>todo!==action.payload)
            console.log(filterdata);
       
            return{
                ...state,
                todos:filterdata

            }

        default:
         
           
            break;
           

           

        
    }
    return state;

  


}