import React, { useEffect, useState } from 'react'

export default function Input(props) {
    console.log(props);
    let[todo,settodo]=useState('')
    let[error,seterror]=useState(false);
    

    const changeinput=(event)=>{
        console.log("change input fire ");
        // console.log(event.target.value);
     
   
       
if(event.target.value.length>0){
  settodo(event.target.value)
  seterror(false)

}else{
  seterror(true)
}
     
              
           
         

       
     
    }
    const submitt=(event)=>{
        event.preventDefault();
        console.log("form submit fire ");

        if(todo.length>0){
          props.addtodo(todo)

        }else{
          seterror(true)
        }
      
     
     settodo('')
    }

    useEffect(()=>{
      settodo(props.edittodos.data)

    },[props.edittodos.data])

    

    
  return (
    <form className="row g-3 mt-5" onSubmit={submitt}>
    <div className="col-10">
     
      <input type="text"  
      className="form-control"  
      placeholder="Enter todos"
      value={todo}
      onChange={changeinput}

      
      
      

      />


    </div>
    {
      error && <p className='text text-danger'>add some todods</p>
    }


 
  
   
    <div className="col-2">
      <button type="submit" className="btn btn-primary mb-3">
      {
                    props.edittodos.index===''? "Add":"Update"
                  }

     
        
        
        
        
       </button>
    

     
    </div>
    
  </form>
  )
}
