import React, { useContext, useState } from 'react'
import store from '../store/store'


export default function Input() {
  let {addtodo}=useContext(store)

  
  console.log(addtodo);
  let[error,seterror]=useState(true)
  let[todo,settodo]=useState("")

  

  const changeinput=(event)=>{
    console.log("change inp fun fired ");
    console.log(event.target.value);

   
    if(event.target.value.length>0){
      settodo(event.target.value)
      seterror(false)

    }else{
      seterror(true)
    }
  }

  const submit=(event)=>{
    event.preventDefault();
    console.log("submit button fire ");

   console.log(todo)
   addtodo(todo)
   

  }
    

  return (
    <div>
      <form className="row g-3 " onSubmit={submit}>
  <div className="col-10">
    <input 
    type="text" 
     className="form-control"
     placeholder="email@example.com"
     value={todo}
     onChange={changeinput}
    />
  </div>
  <div className="col-2">
    <button type="submit" className="btn btn-primary mb-3" >Add</button>
  </div>
  {
    error && <p className='text-danger'>enter some todos </p>
  }
</form>


    </div>
    
  )
}
