import React from 'react'
import Headers from './Headers'
import ReactDOM from 'react-dom'

export default function App() {
  return (
    <div>App portals 


        {
            ReactDOM.createPortal(<Headers/>,document.getElementById("header"))

        }

        <Headers/>

        




    </div>
  )
}
