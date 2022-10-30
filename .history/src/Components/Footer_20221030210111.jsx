import React from "react";
import "./footer.css";
import globe from "./assets/I4G.png";
import logo from "./assets/logo.svg";
const Footer = () => {
  return (
    <div>
      <div className="border">
        <div className="footer">
          <img src={logo} alt="" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={globe} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
