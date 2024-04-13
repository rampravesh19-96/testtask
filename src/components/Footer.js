import React from "react";
import "./Footer.css";
import flogo from "../images/footerlogo.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import linkedin from "../images/linkedin.png"
const Footer = () => {
  return (
    <div className="footercon">
      <div className="footer">
        <div className="footerTop">
          <div className="first">
            <div className="one">
                <div className="logo">
                    <img src={flogo} alt="" />
                </div>
                <div className="socialicons">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
            <div className="two">
            <ul>
                <li>Expertise</li>
                <li>Design</li>
                <li>Specialist Expertise</li>
                <li>Comercial Advice</li>
                <li>Traffic & Transport</li>
              </ul>
            </div>
            <div className="three">
            <ul>
                <li>Sectors</li>
                <li>Road</li>
                <li>Tunner</li>
                <li>Bridge</li>
                <li>Others +</li>
              </ul>
            </div>
          </div>
          <div className="second">
          <ul>
                <li>Our Business</li>
                <li>Work With Us</li>
                <li>Projects</li>
                <li>News</li>
              </ul>
              <ul>
                <li>Our Capabilities</li>
                <li>Engineers</li>
                <li>Contacts</li>
              </ul>
          </div>
        </div>
        <div className="footerBottom">
          <div>@ 2021 Case International. All right reserved.</div>
          <div>Terms & Condition &nbsp;&nbsp;&nbsp;Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
