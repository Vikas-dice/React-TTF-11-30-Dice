import { createStore } from "redux";
// const {createStore}=require('redux')
import { counterReducer } from "../reducer/reducer.counter";





 const store=createStore(counterReducer)
 export default store;






