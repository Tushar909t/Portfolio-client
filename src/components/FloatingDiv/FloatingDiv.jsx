import React from "react";
import "../../assets/css/FloatingDiv/Floating.css";
import { useSelector } from "react-redux";
const FloatingDiv = ({ image, txt1, txt2 }) => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="FloatingDiv">
      <img src={image} alt="Jihan" />
      <span style={{ color: darkMode ? "#21BF73" : "" }}>
        {txt1} <br /> {txt2}
      </span>
    </div>
  );
};

export default FloatingDiv;
