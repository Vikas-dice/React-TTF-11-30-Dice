import React, { Children, useState } from 'react'
import store from '../store/store'
import { initialstate } from '../store/store'


export default function TodoContextProvider(props) {
    let[todos,setTodos]=useState(["breakfast","lunch","dinner"])
    let[editdata,seteditdata]=useState({
      index:'',
      data:''
    })
  


    const addtodo=(value)=>{
               // console.log("******",value);
        setTodos([...todos,value])
    }

    const deletetodo=(value)=>{
        // console.log("delete todo fired here ");
        // console.log(value);
        let filtereddata= todos.filter((todo)=>todo!==value)

        setTodos(filtereddata)
       
        
    }

    
const edittodo=(index,data)=>{
  seteditdata({
    index,
    data
  })

  console.log(index,data);
}

const updatetodo=(maal)=>{
  console.log("fired updated ");
  let splieceddata=todos.splice(editdata.index,1,editdata.data)
  setTodos([splieceddata])
  
}

 


    
  return (
    <div>TodoContextProvider

        <store.Provider value={{
            ...initialstate,
            todos,
            addtodo,
            deletetodo,
           editdata,
           edittodo,
           updatetodo






        }}>

            

{
            props.children
        }
      
      
              
            



        </store.Provider>
        

        




      
     








    </div>


    
  )
}
