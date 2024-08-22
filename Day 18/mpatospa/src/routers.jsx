import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import About from './Pages/About'
import Service from './Pages/Service'
import Home from './Pages/Home'
import Contact from './Pages/Contact'

export default function routers() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/service' element={<Service/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>

        



        </Routes>




    </div>
  )
}
