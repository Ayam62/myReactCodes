import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import About from './components/About/About'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Programs/>
      <About/>
    </>
  )
}

export default App
