import React, { useState } from 'react'
import {store} from '../store/store'
import { initialcontext } from '../store/store'


export default function TodoContextProvider(props) {
    let[todos,settodos]=useState(["BRUNCH","crunch","munch "])
  return (
    <div>TodoContextProvider

        <store.Provider value={{
           ...initialcontext,todos

       





        }}>

            {
                props.children
            }
    

        </store.Provider>






    </div>
  )
}
