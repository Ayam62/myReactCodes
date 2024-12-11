import React from "react";
import videoImg from "../../assets/edusity_assets/about.png";
import "./about.css"

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutLeft">
        <img src={videoImg} width="300px" alt="" />
      </div>
      <div className="aboutRight">
        <div className="aboutNav">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
        </div>
        <div className="aboutDiscription">
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education. With a
          focus on innovation, hands-on learning, and personalized mentorship,
          our programs prepare aspiring educators to make a meaningful impact in
          classrooms, schools, and communities. Whether you aspire to become a
          teacher, administrator, counselor, or educational leader, our diverse
          range of programs offers the perfect pathway to achieve your goals and
          unlock your full potential in shaping the future of education.
        </div>
      </div>
    </div>
  );
};

export default About;
