import React, { useState } from 'react'

export default function Employee() {

    let[formdata,setformdata]=useState({
        firstName:'',
        lastName:''
    })

    const inputchange=(event)=>{
        setformdata((prevState)=>({
            ...prevState,
            [event.target.name]:event.target.value

        }))
    }
    const submit=async (event)=>{
        event.preventDefault();
        console.log(formdata);

     let response=  await fetch('httpwtf-efe3c-default-rtdb/data/~2F/employee.json',{
            method:'POST',
            body:JSON.stringify(formdata)
         
        })

        // console.log(response);
        let dt=await response.json();
        console.log(dt);

    }
  return (
    <div>Employee


<form className='container mt-4' onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="first-name" className="form-label">First Name</label>
    <input 
    type="text"
     className="form-control" 
     id="first-name"
      name='firstName'
      value={formdata.firstName}
      onChange={inputchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="last-name" className="form-label">last Name</label>
    <input 
    type="text" 
    className="form-control"
     id="last-name"
     name='lastName'
     value={formdata.lastName}
     onChange={inputchange}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>


    </div>
  )
}
