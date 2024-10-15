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
    </div>
    </>
  )
}

export default App


