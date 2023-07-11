import React from "react";
import "../../assets/css/Experience/Experience.css";
import { useSelector } from "react-redux";
const Experience = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="experience">
      <div className="achievement">
        <div className="circle">8+</div>
        <span style={{ color: darkMode ? "#fff" : "" }}>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">20+</div>
        <span style={{ color: darkMode ? "#fff" : "" }}>completed</span>
        <span>Project</span>
      </div>
      <div className="achievement">
        <div className="circle">5+</div>
        <span style={{ color: darkMode ? "#fff" : "" }}>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
