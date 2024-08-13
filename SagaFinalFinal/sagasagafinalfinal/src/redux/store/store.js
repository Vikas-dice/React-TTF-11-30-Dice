import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../reducer/country.reducer";
import createSagaMiddleware from 'redux-saga'
import { country } from "../saga/country.saga";



// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


const store=configureStore({
    reducer:countryReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools:true
})

sagaMiddleware.run(country)

export default store;