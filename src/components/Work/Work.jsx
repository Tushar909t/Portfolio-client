import React from "react";
import "../../assets/css/Work/Work.css";
import Upwork from "../../assets/img/Upwork.png";
import Fiverr from "../../assets/img/fiverr.png";
import Amazon from "../../assets/img/amazon.png";
import Shopify from "../../assets/img/Shopify.png";
import Facebook from "../../assets/img/Facebook.png";
import { useSelector } from "react-redux";
const Work = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="work">
      <div className="awesome">
        <span style={{ color: darkMode ? "#fff" : "" }}>
          Work For All These
        </span>
        <span>Brand & Client</span>
        <spane style={{ color: darkMode ? "#fff" : "" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium
          esse <br /> deserunt quod eaque dolorum totam ea.
          <br />
          Lorem ipsum dolor sit amet, consectetur
          <br />
          Lorem ipsum dolor sit amet, consectetur
        </spane>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{ background: "#ABF1FF" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="Jihan" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="Jihan" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Jihan" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Jihan" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="Jihan" />
          </div>
        </div>
        {/* Background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  );
};

export default Work;
