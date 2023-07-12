import React from "react";
import "../../assets/css/Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
const Navbar = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div style={{ color: darkMode ? "#fff" : "" }} className="n-name">
          Jihan uddin
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul
            style={{
              listStyleType: "none",
              color: darkMode ? "#fff" : "",
            }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass">
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass">
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass">
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Portfolio"
              smooth={true}
              activeClass="activeClass">
              <li>Portfolio</li>
            </Link>
            <Link
              spy={true}
              to="Testimonials"
              smooth={true}
              activeClass="activeClass">
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
