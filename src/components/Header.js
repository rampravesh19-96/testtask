import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../images/headerlogo.png";
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Header = ({ setMenuOpenn }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setMenuOpenn(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 147) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <IoMdMenu className="menuicon" onClick={handleMenu} />
      <CgProfile className="profileicon" />

      {menuOpen && (
        <div className="mob-menu-open">
          <div className="sidebar">
            <div className="logoandclose">
              <div className="mb-logo">
                <img src={logo} />
              </div>
              <IoCloseSharp className="mb-close" onClick={handleMenu} />
            </div>
            <ul>
            <li>PROJECTS</li>
            <li>EXPERTISE</li>
            <li>ABOUT US</li>
            <li>PEOPLE</li>
            <li>CAREERS</li>
            <li>AU</li>
          </ul>
          </div>
        </div>
      )}
      <div className={`header ${isSticky ? "stickyy" : ""} smheading`}>
        <ul>
          <li>projects</li>
          <li>expertise</li>
          <li>about us</li>
          <li>people</li>
          <li>
            <img src={logo} className="logo" />
          </li>
        </ul>
        <ul>
          <li>careers</li>
          <li>au</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
