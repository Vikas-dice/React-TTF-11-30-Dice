import React from 'react'

export default function List(props) {
   
  return (
    <ul className="list-group">

        {

            props.todos.length>0 ?props.todos.map((value,index,arr)=>{
                return <li className="list-group-item" key={index}>{value}</li>

            }) :<li className="list-group-item">no todo</li>
        }





   
    
    {/* <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}
  </ul>
  )
}
