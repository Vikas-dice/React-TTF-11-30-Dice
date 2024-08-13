import { takeLatest } from "redux-saga/effects";
import { GET_COUNTRY_START } from "../constants/country.constants";
import { getcountriesfromAPI } from "../service/country.service";
import { getcountryerror, getcountrysucess } from "../action/country.action";
import { put } from "redux-saga/effects";

function* getcountry(){
    try {
   
        const data=yield getcountriesfromAPI()
        console.log("coming data",data);
        yield put(getcountrysucess(data))
        
        
    } catch (error) {
        yield put(getcountryerror(error));

        
    }


}



export function* country(){
    yield takeLatest(GET_COUNTRY_START,getcountry)

}