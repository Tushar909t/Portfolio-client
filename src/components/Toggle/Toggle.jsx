import React from "react";
import "../../assets/css/Toggle/Toggle.css";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { useSelector, useDispatch } from "react-redux";
import { Showdark, Hidedark } from "../../redux/state-slice/darkSlice";
const Toggle = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  const dispatch = useDispatch();
  const HandlClick = () => {
    dispatch(darkMode ? Hidedark() : Showdark());
  };
  return (
    <div className="toggle" onClick={HandlClick}>
      <Moon />
      <Sun />
      <div
        style={darkMode ? { left: "2px" } : { right: "2px" }}
        className="t-button"></div>
    </div>
  );
};

export default Toggle;
