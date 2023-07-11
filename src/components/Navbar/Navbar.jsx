import React from "react";
import "../../assets/css/Navbar/Navbar.css";
import Toggle from "../Toggle/Toggle";
import { useSelector } from "react-redux";
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
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
