import React from 'react'
import "./hero.css"
import leftArrow from "../../assets/edusity_assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className="centerInfo">
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <div className="explore">
            <button className='btn'>Explore more
                <img src={leftArrow} width="30px"></img>

            </button>
            </div>
        </div>
    </div>
  )
}

export default Hero