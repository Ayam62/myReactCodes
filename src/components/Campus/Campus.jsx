import React from 'react'
import "./campus.css"
import gallery1 from "../../assets/edusity_assets/gallery-1.png"
import gallery2 from "../../assets/edusity_assets/gallery-2.png"
import gallery3 from "../../assets/edusity_assets/gallery-3.png"
import gallery4 from "../../assets/edusity_assets/gallery-4.png"

const Campus = () => {
  return (
    <div className='campusContainer' id="campus">
        <div className="campusNav">
            <p>Gallery</p>
            <h2>Campus Photo</h2>
        </div>
        <div className="imgContainer">
            <img src={gallery1} width="18%" alt="" />
            <img src={gallery2} width="18%" alt="" />
            <img src={gallery3} width="18%" alt="" />
            <img src={gallery4}  width="18%" alt="" />
        </div>
        <div className="button">
            <button>See More Here</button>
        </div>
        
    </div>
  )
}

export default Campus