import { createStore } from "redux";
import { TodoReducer } from "../reducer/todo-reducer";

const store=createStore(TodoReducer);


console.log(store);


export default store;