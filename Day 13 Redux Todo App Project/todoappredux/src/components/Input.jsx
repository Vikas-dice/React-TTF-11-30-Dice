import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Input() {
    const dispatch=useDispatch();

    let[todo,settodo]=useState('')
    let[error,seterror]=useState(true)


    const changeinput=(event)=>{
        console.log(event.target.value);

        if(event.target.value.length>0){
            settodo(event.target.value)
          seterror(false)
        }
    

       



    }

    const submit=(event)=>{
        event.preventDefault();
        if(todo.length>0){
       
            seterror(false)
            settodo("")
        }else{
            seterror(true)
        }
        console.log("-----------",todo);
      

        


    }
  return (
    <div>

<form className="row g-3" onSubmit={submit}>
  <div className="col-10">
    
    <input 
    type="text" 
     className="form-control"
     placeholder="enter todos"
     value={todo}
     onChange={changeinput}

    
     />
     {
        error && <p className='text text-danger'>enter some todos to continue</p>
     }
  </div>

  <div className="col-2">
    <button type="submit" className="btn btn-primary mb-3" onClick={()=>dispatch({
        type:"ADD_TODO",
        payload:todo

    })}>Add</button>
  </div>
</form>






    </div>
  )
}
