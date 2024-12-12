import React from "react";
import "./testimonial.css";
import Profile from "../../assets/edusity_assets/user-1.png";
import nextArrow from "../../assets/edusity_assets/next-icon.png";
import prevArrow from "../../assets/edusity_assets/back-icon.png";

const Testimonial = () => {

    

    const handlePrevBtn=(e)=>{

    }
    const handleNextBtn=(e)=>{

    }

  return (
    <div className="testimonialContainer">
      <div className="testiNav">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
      </div>
      <div className="cardContainer">
          <img className="prevArrow" src={prevArrow} onClick={handlePrevBtn} alt="" />
          <img className="nextArrow" src={nextArrow} onClick={handleNextBtn} alt="" />
        <div class="testimonial-card">
          <div class="profile-section">
            <img src={Profile} alt="Emily Williams" class="profile-pic" />
            <div class="profile-info">
              <h3 class="name">Emily Williams</h3>
              <p class="location">Edusity, USA</p>
            </div>
          </div>
          <p class="testimonial-text">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div class="testimonial-card">
          <div class="profile-section">
            <img src={Profile} alt="Emily Williams" class="profile-pic" />
            <div class="profile-info">
              <h3 class="name">Emily Williams</h3>
              <p class="location">Edusity, USA</p>
            </div>
          </div>
          <p class="testimonial-text">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div class="testimonial-card">
          <div class="profile-section">
            <img src={Profile} alt="Emily Williams" class="profile-pic" />
            <div class="profile-info">
              <h3 class="name">Emily Williams</h3>
              <p class="location">Edusity, USA</p>
            </div>
          </div>
          <p class="testimonial-text">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div class="testimonial-card">
          <div class="profile-section">
            <img src={Profile} alt="Emily Williams" class="profile-pic" />
            <div class="profile-info">
              <h3 class="name">Emily Williams</h3>
              <p class="location">Edusity, USA</p>
            </div>
          </div>
          <p class="testimonial-text">
            Choosing to pursue my degree at Edusity was one of the best
            decisions I've ever made. The supportive community, state-of-the-art
            facilities, and commitment to academic excellence have truly
            exceeded my expectations.
          </p>
        </div>
        <div className="arrowContainer">
          
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
