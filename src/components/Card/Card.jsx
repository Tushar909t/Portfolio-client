import React from "react";
import "../../assets/css/Card/Card.css";
import { useSelector } from "react-redux";
const Card = ({ emoji, heading, details }) => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="card">
      <img src={emoji} alt="Jihan" />
      <span style={{ color: darkMode ? "#fff" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "#fff" : "" }}>{details}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};
export default Card;
