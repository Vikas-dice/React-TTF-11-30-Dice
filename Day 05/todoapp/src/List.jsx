import React from 'react'

export default function List(props) {
  // console.log(props);
   
  return (
    <ul className="list-group">

        {

            props.todos.length>0 ?props.todos.map((value,index,arr)=>{
                return <li className="list-group-item d-flex justify-content-between"  key=
                
                {index}>
                  <div>{value}</div>
                  <div>
                   <div>
                    <button className='text text-info' onClick={()=>props.edittodos(index,value)}>edit</button>
                   </div>
                    <button className='btn btn-danger'
                    onClick={()=>props.deletetodo(value)}
                    
                    
                    >
                      
                      Delete</button>
                  </div>
                  
                  
                  
                  
                  
                  </li>

            }) :<li className="list-group-item">no todo</li>
        }





   
    
    {/* <li className="list-group-item">A third item</li>
    <li className="list-group-item">A fourth item</li>
    <li className="list-group-item">And a fifth one</li> */}
  </ul>
  )
}
