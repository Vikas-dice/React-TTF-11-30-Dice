// import { createStore } from "redux";
// store.js
const { createStore } = require('redux');
const todoreducer=(state=5,action)=>{
    if(action.type==="INCREMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }
    return state;

}
let store=createStore(todoreducer);
store.subscribe(()=>{
    console.log(store.getState());

})

store.dispatch({
    type:"INCREMENT",
  

})
// console.log("level 2",store.getState());

store.dispatch({
    type:"DECREMENT",

})


// console.log("level 3",store.getState());


