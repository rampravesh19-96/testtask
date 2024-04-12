import React, { useEffect, useState } from "react";
import "./LastComp.css";
import girl from "../images/girl.png";
import girl2 from "../images/girl2.jpeg";
import quote from "../images/quote.png";
import arrow from "../images/arrow.png";
import arrow2 from "../images/color.png";
import map from "../images/map.png";
import CarouselBtn from "./CarouselBtn";

const data = [
  {
    img: girl,
    title: "Title",
    name: "Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.Title Name",
  },
  {
    img: girl2,
    title: "Title2",
    name: "Name2",
    description:
      "22Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.Title Name",
  },
];

const LastComp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlide = (btnType) => {
    if (btnType === ">") {
      if (currentSlide === data.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }
    if (btnType === "<") {
      if (currentSlide === 0) {
        setCurrentSlide(data.length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevPage) => (prevPage + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="main">
      <div className="toppart">
        <div className="topcon">
          <div className="leftpart">
            <div className="imgcon">
              <img src={data[currentSlide].img} alt="" />
            </div>
          </div>
          <div className="rightpart">
            <div style={{ width: "90%" }}>
              <img src={quote} alt="" className="quote" />
              <p>{data[currentSlide].description}</p>
              <p className="title">{data[currentSlide].title}</p>
              <p className="name">{data[currentSlide].name}</p>
              <p className="readmore">
                <img src={arrow} alt="" />
                <span>Read my story</span>
              </p>
            </div>
            <div className="arrowbtn">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  gap: "10px",
                }}
              >
                <CarouselBtn btnText={"<"} handleCrousel={handleSlide} />
                <CarouselBtn btnText={">"} handleCrousel={handleSlide} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottompart">
        <div className="btcon">
          <div className="mainhead">
            <div style={{textAlign:"center"}}>As a <span>global business,</span> we encourage you to contact us no matter where you are located in the world.</div>
          </div>
          <div className="subhead">
            Browse our job opportunities across the globe.
          </div>
          <div className="openroles"><span>OPEN ROLES</span> <div className="arrcircle"> <img src={arrow2}/></div></div>
          <div className="mapimgcon">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastComp;
