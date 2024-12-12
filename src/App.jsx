import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contacts/Contact'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
      <Campus/>
      {/* <Testimonial/> */}
      <Contact/> 

    </>
  )
}

export default App
