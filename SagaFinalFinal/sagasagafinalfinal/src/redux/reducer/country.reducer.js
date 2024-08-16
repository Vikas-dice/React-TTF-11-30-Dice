import { GET_COUNTRY_ERROR, GET_COUNTRY_START, GET_COUNTRY_SUCCESS } from "../constants/country.constants";

const initialstate={
    countries:[],
    error:false,
  
    
    loading:true
}



const countryReducer=(state=initialstate,action)=>{
    switch(action.type){
    
            case GET_COUNTRY_SUCCESS:
                return{
                    ...state,
                    countries:[...action.payload],
                    loading:false,
                    error:false
                    
                }

            case GET_COUNTRY_ERROR:
                return{
                    ...state,
                    error:action.payload,
                    loading:false,
                    error:true
                    
                }


        default:
            return state;
    }
}

export default countryReducer;