import React from 'react'

export default function List(props) {
  console.log(props);
   
  return (
    <ul className="list-group">

        {

            props.todos.length>0 ?props.todos.map((value,index,arr)=>{
                return <li className="list-group-item d-flex justify-content-between"  key=
                
                {index}>
                  <div>{value}</div>
                  <div className='d-flex flex-row '>
                   <div className='mx-3'>
                    <button 
                    className="btn btn-warning"
                    onClick={()=>props.editTodos(index,value)}
                    
                    
                    >edit</button>
                   </div>
                    <button className='btn btn-danger'
                    onClick={()=>props.deletetodo(value)}
                    
                    
                    >
                      
                      Delete</button>
                  </div>

                 
                  
                  
                  
                  
                  
                  </li>

            }) :<li className="list-group-item">no todo</li>
        }





   
   
  </ul>
  )
}
