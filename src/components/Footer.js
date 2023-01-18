import React from "react";
import "../css/footer.css";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon-container">
        <a href="https://www.instagram.com/" className="footer-icon">
          <GrInstagram />
        </a>
      </div>
    </div>
  );
};

export default Footer;
