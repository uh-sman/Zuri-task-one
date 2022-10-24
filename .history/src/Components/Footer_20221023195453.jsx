import React from "react";
import globe from "./assets/I4G.png";
import logo from "./assets/logo.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <img src={logo} alt="" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={globe} alt="" />
      </div>
    </div>
  );
};

export default Footer;
