import React, { useEffect, useState } from "react";
import "./Slider.css";
import CarouselBtn from "./CarouselBtn";



const Slider = ({data}) => {
    const [curData,setCurData] = useState(0)
    const handleSlider = () => {
        if(curData===data.length-1){
          setCurData(0)
        }else{
          setCurData(curData+1)
        }
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurData(prevPage => (prevPage + 1) % data.length);
        }, 3000);
    
        return () => clearInterval(intervalId); 
      }, []);
  return (
    <div className="slider">
      <div className="number">0{data[curData].index}</div>
      <div className="textAndBtn">
        <div className="text">{data[curData].text}</div>
        <CarouselBtn btnText={">"} bdCol={'#FFE1E1'} col={'white'} handleCrousel={handleSlider}/>
      </div>
    </div>
  );
};

export default Slider;
