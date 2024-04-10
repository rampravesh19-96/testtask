import React, { useEffect, useState } from 'react'
import "./Header.css"

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) {
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
    <div className={`header ${isSticky ? "stickyy" : ""}`}>
    <ul>
      <li>projects</li>
      <li>expertise</li>
      <li>about us</li>
      <li>people</li>
    </ul>
    <ul>
      <li>careers</li>
      <li>au</li>
    </ul>
  </div>  )
}

export default Header