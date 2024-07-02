import React, { useContext, useEffect, useState } from 'react'
import store from '../store/store'
import { initialstate } from '../store/store'

export default function Input() {
    let[todo,settodo]=useState("")
    let {addtodo,editdata,edittodo,updatetodo}= useContext(store);
    // console.log("ye lo add todo mil rha h ",addtodo);
    let[error,seterror]=useState(true)

  
    // console.log(addtodo);
   
   


    const changeinput=(event)=>{
  
       

      settodo(event.target.value)
        if(event.target.value.length>0){
       
           
            seterror(false)
        }else{
            seterror(true)
        }


      }





        // console.log("vikas chaudhary");
        // console.log(event.target.value);
      
        // if(event.target.value.length>0){
        //     settodo(event.target.value)
        //     seterror(true)
           
        // }else{
        //     seterror(false)
        // }

      
        // if(event.target.value.length>0){
        //     settodo(event.target.value)
        //     seterror(false)
            
        // }else{
        //     seterror(true)
        // }


 

    const submitt=(event)=>{
        event.preventDefault();
     
        
        // console.log("submit button fire ");
     if(todo.length>0){
     
        addtodo(todo)
        settodo("")
        seterror(false)
     }else{
        seterror(true)
     }


    }

    useEffect(()=>{
      settodo(editdata.data)

    },[editdata.index,editdata.value])
  return (
    <form className="row" onSubmit={submitt}>
    <div className="col-10">
   
      <input
      type="text"  
      className="form-control"  
      placeholder="enter todos"
      value={todo}
      onChange={changeinput}
      
      />

      {
        error && <p className='text-danger'>enter some todos to continue</p>

      }
    </div>
  
    <div className="col-2">
      <button type="submit" className="btn btn-primary mb-3">
        {
          editdata.index==='' ? "add":"update"
        }
        
        
        
        </button>
    </div>
  </form>
  )
}
