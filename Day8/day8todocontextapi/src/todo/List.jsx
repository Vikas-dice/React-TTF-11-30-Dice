import React, { useContext } from 'react'
import store from '../store/store'


export default function List() {
    let {todos}=useContext(store);
    console.log(todos);
  return (
    <ul className="list-group">

        {
            todos.length>0? todos.map((value,index)=>{
                return  <li className="list-group-item" key={index}>{value}</li>

            }) :  <li className="list-group-item">No TODO </li>
        }







 

 
</ul>
  )
}
