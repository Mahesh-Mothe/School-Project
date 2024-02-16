import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Contact from './pages/Contact'
import Happenings from './pages/Happenings'
import Career from './pages/Career'


export default function AllRoutes() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/happen" element={<Happenings />} />
        <Route path='/career1' element={<Career />} />
    </Routes>
    </>
  )
}
