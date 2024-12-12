import React from "react";
import logo from "../../assets/edusity_assets/logo.png";
import "./navbar.css";
import {Link} from "react-scroll";
function Navbar() {
  return (
    <nav>
      <img src={logo} width="170px" height="40px" alt="" />
      <div className="button">
        <button>
          <Link
            activeClass="active"
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
          >
            {" "}
            Home
          </Link>
        </button>
        <button>
        <Link
            activeClass="active"
            to="program"
            smooth={true}
            offset={-200}
            duration={500}
          >Program
          </Link></button>
        <button>
        <Link
            activeClass="active"
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >About us</Link></button>
        <button>
        <Link
            activeClass="active"
            to="campus"
            smooth={true}
            offset={-120}
            duration={500}
          >Campus</Link> </button>
        {/* <button>
        <Link
            activeClass="active"
            to="testimonials"
            smooth={true}
            offset={-100}
            duration={500}
          >Testimonials</Link></button> */}
        <button className="btn">
        <Link
            activeClass="active"
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
          >Contact us</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;
