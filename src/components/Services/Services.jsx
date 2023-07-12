import React from "react";
import "../../assets/css/Services/Services.css";
import HeadEmoji from "../../assets/img/heartemoji.png";
import Glasses from "../../assets/img/glasses.png";
import Humble from "../../assets/img/humble.png";
import Card from "../Card/Card";
import cv from "../cv/Web-Designer-Resume-jihan.pdf";
import { useSelector } from "react-redux";
const Services = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesome">
        <span style={{ color: darkMode ? "#fff" : "" }}>My Awesome</span>
        <span>Services</span>
        <spane style={{ color: darkMode ? "#fff" : "" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          esse <br /> deserunt quod eaque dolorum totam ea.
        </spane>
        <a href={cv}>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <div style={{ left: "36rem" }}>
          <Card
            emoji={HeadEmoji}
            heading={"Design"}
            details={"Figma , Sketch, Photoshop, Adobe, Adobe Xd"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "17rem" }}>
          <Card
            emoji={Glasses}
            heading={"Development"}
            details={
              "Html , Css, Javascript, React, Node js,Express js MongoDB"
            }
          />
        </div>
        {/* Third card */}
        <div style={{ top: "19rem", left: "33rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            details={
              "lorem is simply dummy text of the pring and typesetting industry"
            }
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Services;
