import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function List() {
    const dispatch=useDispatch();

    let {todos}=useSelector((state)=>state)
    console.log(todos);

  return (
    <div>

<ul className="list-group">

    {
        todos.length>0?todos.map((value,index)=>{
            return   <li className="list-group-item d-flex justify-content-between" key={index}>
                
                <div>  {value}</div>

                <div>
                    <button className='btn btn-danger ' onClick={()=>dispatch({
                        type:"DELETE_TODO",
                        payload:value
                    })}>Delete</button>
                </div>

                <div>
                    <button className='btn btn-danger ' >Edit</button>
                </div>
              
                
                
                
                </li>
        }) :  <li className="list-group-item">no todo </li>
    }



</ul>





    </div>
  )
}
