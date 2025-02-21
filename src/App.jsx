import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Navbar/Home'
import Menu from './Navbar/Menu'
import Profile from './Navbar/Profile'
import Contact from './Navbar/Contact'
import Navcomponent from './Components/Navcomponent'
import Privacy from './Footer/Privacy'
import Terms from './Footer/Terms'
import Register from './Navbar/Register'
import Forget from './Navbar/Forget'




const App = () => {
  return (
    <BrowserRouter>
      <Navcomponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget' element={<Forget />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
