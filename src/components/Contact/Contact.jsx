import React from "react";
import "../../assets/css/Contact/Contact.css";
import { useSelector } from "react-redux";
const Contact = () => {
  const darkMode = useSelector((state) => state.dark.DarkMode);
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "#fff" : "" }}>Get in Touch</span>
          <span>Contact Me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}></div>
        </div>
      </div>
      <div className="c-right">
        <form action="#">
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea
            name="message"
            placeholder="Message"
            className="user"></textarea>
          <input type="submit" value="send" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
