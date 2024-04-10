import React, { useEffect, useState } from "react";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
const carousel1Data = [
  {
    img: carousel1,
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: carousel2,
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },

]

const TestComp = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [carouselPage, setCarouselPage] = useState(0);

  const handleCrousel = (btnType) => {
    if(btnType===">"){
      if(carouselPage===carousel1Data.length-1){
        setCarouselPage(0)
      }else{
        setCarouselPage(carouselPage+1)
      }
    }
    if(btnType==="<"){
      if(carouselPage===0){
        setCarouselPage(carousel1Data.length-1)
      }else{
        setCarouselPage(carouselPage-1)
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselPage(prevPage => (prevPage + 1) % carousel1Data.length);
    }, 3000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <>
      <div className="main">
        <div
          className="carousel"
          style={{ backgroundImage: `url(${carousel1Data[carouselPage].img})` }}
        >
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
          </div>
          <div className="headAndBtn">
            <div className="headAndSUbHead">
              <h2>{carousel1Data[carouselPage].subHeading1}</h2>
              <h1>{carousel1Data[carouselPage].heading}</h1>
              <h3>{carousel1Data[carouselPage].subHeading2}</h3>
            </div>
            <div className="carouselBtn">
              <button onClick={()=>handleCrousel(">")}>{">"}</button>
              <button onClick={()=>handleCrousel("<")}>{"<"}</button>
            </div>
          </div>
        </div>
        <div className="devider1"></div>
        <div className="carousel-bottom"></div>
      </div>
      <div style={{height:"2000px",width:"100%",background:"pink"}}></div>
    </>
  );
};

export default TestComp;
