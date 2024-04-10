import React, { useEffect, useState } from "react";
import "./Carousel.css";
import carousel1 from "../images/carousel1.png";
import carousel2 from "../images/carousel2.png";
import CarouselBtn from "./CarouselBtn";

const carouselData = [
  {
    img: carousel1,
    alt: "",
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: carousel2,
    alt: "",
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },
  {
    img: carousel1,
    alt: "",
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: carousel2,
    alt: "",
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },
];

const Carousel = () => {
  const [curData, setCurData] = useState(0);

      const handleCrousel = (btnType) => {
        if(btnType===">"){
          if(curData===carouselData.length-1){
            setCurData(0)
          }else{
            setCurData(curData+1)
          }
        }
        if(btnType==="<"){
          if(curData===0){
            setCurData(carouselData.length-1)
          }else{
            setCurData(curData-1)
          }
        }
      }
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurData(prevPage => (prevPage + 1) % carouselData.length);
        }, 3000);
    
        return () => clearInterval(intervalId); 
      }, []);
  return (
    <>
      <div className="carousel">
        <div
          className="img"
          style={{ backgroundImage: `url(${carouselData[curData].img})` }}
        >
          <div className="btnCon">
            <CarouselBtn btnText={"<"} handleCrousel={handleCrousel} />
            <CarouselBtn btnText={">"} handleCrousel={handleCrousel} />
          </div>
          <div className="headCon">
            <div>{carouselData[curData].subHeading1}</div>
            <h1>{carouselData[curData].heading}</h1>
            <div>{carouselData[curData].subHeading2}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
