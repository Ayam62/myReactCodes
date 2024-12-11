import React from 'react'
import program1 from "../../assets/edusity_assets/program-1.png"
import program2 from "../../assets/edusity_assets/program-2.png"
import program3 from "../../assets/edusity_assets/program-3.png"
import "./programs.css"
const Programs = () => {
  return (
    <div className='ProgramsContainer'>
        <div className="programNav">
            <p>OUR PROGRAM</p>
            <h2>What We Offer</h2>
            <div className="navImg">
                <img src={program1} width="350px" alt="" />
                <img src={program2} width="350px" alt="" />
                <img src={program3} width="350px" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Programs