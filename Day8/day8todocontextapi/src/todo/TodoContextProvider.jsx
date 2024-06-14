import React, { useState } from 'react'
import store from '../store/store'
import { initialcontext } from '../store/store'


 function TodoContextProvider(props) {
    let[todos,settodos]=useState([])


    const addtodo=(value)=>{
      settodos([...todos,value])
    }
  return (
    <div>TodoContextProvider

        <store.Provider value={{
           ...initialcontext,todos,
           addtodo

        }}>

            {
                props.children
            }
    

        </store.Provider>






    </div>
  )
}

export default TodoContextProvider;