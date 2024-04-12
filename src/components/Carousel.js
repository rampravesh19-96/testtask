import React, { useEffect, useState } from "react";
import "./Carousel.css";
import CarouselBtn from "./CarouselBtn";

const Carousel = ({
  carouselData,
  image = true,
  text = true,
  isBtn = true,
  newRation = false
}) => {
  const [curData, setCurData] = useState(0);

  const handleCrousel = (btnType) => {
    if (btnType === ">") {
      if (curData === carouselData.length - 1) {
        setCurData(0);
      } else {
        setCurData(curData + 1);
      }
    }
    if (btnType === "<") {
      if (curData === 0) {
        setCurData(carouselData.length - 1);
      } else {
        setCurData(curData - 1);
      }
    }
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurData((prevPage) => (prevPage + 1) % carouselData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className={`carousel ${newRation?'newRation' : ''}`}>
          <div
            className="img"
            style={
              image
                ? { backgroundImage: `url(${carouselData[curData].img})` }
                : { color: "black" }
            }
          >
            {isBtn && (
              <div className="btnCon">
                <CarouselBtn btnText={"<"} handleCrousel={handleCrousel} />
                <CarouselBtn btnText={">"} handleCrousel={handleCrousel} />
              </div>
            )}
            {text && (
              <div className="headCon">
                <h3>{carouselData[curData].subHeading1}</h3>
                <h1>{carouselData[curData].heading}</h1>
                <h3>{carouselData[curData].subHeading2}</h3>
              </div>
            )}
          </div>
      </div>
    </>
  );
};

export default Carousel;
