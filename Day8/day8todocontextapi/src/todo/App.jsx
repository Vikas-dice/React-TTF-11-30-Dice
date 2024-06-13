import React, { useContext, useState } from 'react'
import Input from './Input'
import List from './List'
import {store} from '../store/store'
export default function App() {
   
  return (
    <div className='container mt-5'>
          <Input  />
          <List />


    </div>

  
    
  )
}
