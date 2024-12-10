import React from 'react'
import logo from '../../assets/edusity_assets/logo.png'
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <img src={logo} width='150px' alt="" />
        <div className='button'>
            <button>Home</button>
            <button>Program</button>
            <button>About us</button>
            <button>Campus</button>
            <button>Testimonials</button>
            <button className='btn'>Contact us</button>
        </div>
    </nav>
  )
}

export default Navbar