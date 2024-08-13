import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constants/country.constants";

const initialstate={
    countries:[],
  
    
    loading:true
}



const countryReducer=(state=initialstate,action)=>{
    switch(action.type){
    
            case GET_COUNTRY_SUCCESS:
                return{
                    ...state,
                    countries:[...action.payload],
                    loading:false
                    
                }

            case GET_COUNTRY_ERROR:
                return{
                    ...state,
                    error:action.payload,
                    loading:false
                    
                }


        default:
            return state;
    }
}

export default countryReducer;