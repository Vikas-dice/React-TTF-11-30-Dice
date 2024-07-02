import React, { useContext } from 'react'
import store from '../store/store'

export default function List() {
    let {todos,deletetodo,edittodo,editdata}=useContext(store)
    console.log(editdata);
    // console.log(deletetodo);
    // console.log(todos);
  return (

    <ul className="list-group">

        {
            todos.length>0 ?todos.map((value,index)=>{
               return <li className="list-group-item d-flex justify-content-between mx-2 " key={index}>
                <div> {value}</div>
                <div>

                 
                    <button className='btn btn-danger mx-2'
                   
                    onClick={()=>deletetodo(value)}
                    >delete</button>

                    <button className='btn btn-warning' onClick={()=>edittodo(index,value)}>Edit</button>
                </div>
                
               </li>

            }) :  <li className="list-group-item">no todo</li>
        }
 


</ul>

  )
}



