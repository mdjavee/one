import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import First from './first'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Grocery from './components/Grocery'
import Devices from './components/Devices'
const App = () => {
  return (
    <>
    <div>
<<<<<<< HEAD
    <BrowserRouter>
    <First/>
    <Routes>
      <Route path="/Men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/grocery" element={<Grocery />} />
      <Route path="/devices" element={<Devices />} />
      
    </Routes>
    </BrowserRouter>
=======
         <h1 className='xs:text-1xl xs:text-red-400 sm:text-cyan-300 smm:text-purple-400  mx-6 my-6 sm:text-2xl smm:text-3xl'>Hello</h1>
   
>>>>>>> 0bd406feb81c6f4306558627392654f5dc9c16d4
    </div>
    </>
  )
}

export default App


