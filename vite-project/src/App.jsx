import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Service from '../src/pages/Service'
import Gallery from '../src/pages/Gallery'
import Contact from '../src/pages/Contact'
import Header from './component/common/Header'


export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App