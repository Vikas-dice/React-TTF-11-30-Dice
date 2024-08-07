import { configureStore } from "@reduxjs/toolkit";
import { CountryReducer } from "../Reducer/country.reducer";
import createSagaMiddleware from 'redux-saga'



const sagaMiddleware = createSagaMiddleware()



export const store=configureStore({

    reducer:CountryReducer,
    devTools:true,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    
    


})

sagaMiddleware.run();
