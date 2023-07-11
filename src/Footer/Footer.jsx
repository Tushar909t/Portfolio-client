import React from "react";
import "../assets/css/Footer/Footer.css";
import wave from "../assets/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Face from "@iconscout/react-unicons/icons/uil-facebook";
import Git from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Tusharahmed483@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Face color="white" size={"3rem"} />
          <Git color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
