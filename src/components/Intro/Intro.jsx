import React from "react";
import "../../assets/css/Intro/Intro.css";
import Github from "../../assets/img/github.png";
import Linkedin from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import Boy from "../../assets/img/boy.png";
import Thumbup from "../../assets/img/thumbup.png";
import Crown from "../../assets/img/crown.png";
import Glassesimoji from "../../assets/img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { useSelector } from "react-redux";
const Intro = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "#fff" : "" }}>Hy! I Am</span>
          <span>Jihan Uddin</span>
          <span style={{ color: darkMode ? "#fff" : "" }}>
            Frontend Developer with high level experience in web designing and
            development, producting Quality work
          </span>
        </div>
        <button className="button i-button"> Hire Me</button>
        <div className="i-icons">
          <a href={false}>
            <img src={Github} alt="Jihan" />
          </a>
          <a href={false}>
            <img src={Linkedin} alt="Jihan" />
          </a>
          <a href={false}>
            <img src={Instagram} alt="Jihan" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Jihan" />
        <img src={Vector2} alt="Jihan" />
        <img src={Boy} alt="Jihan" />
        <img src={Glassesimoji} alt="Jihan" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0" }}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* Blur*/}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}></div>
      </div>
    </div>
  );
};

export default Intro;
