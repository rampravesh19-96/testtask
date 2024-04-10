import React from 'react'
import Carousel from './components/Carousel'
import carousel1 from "./images/carousel1.png";
import Header from './components/Header';
import Slider from './components/Slider';
const s1Data = [
  { index: 1, text: "We stay connected1" },
  { index: 2, text: "We stay connected2" },
  { index: 3, text: "We stay connected3" },
];
const s2Data = [
  { index: 1, text: "We believe in diversity & inclusion 1" },
  { index: 2, text: "We believe in diversity & inclusion 2" },
  { index: 3, text: "We believe in diversity & inclusion 3" },
];
const s3Data = [
  { index: 1, text: "We celebrate success1" },
  { index: 2, text: "We celebrate success2" },
  { index: 3, text: "We celebrate success3" },
];

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <Carousel src={carousel1}/>
      <div className="devider1"></div>
      <div className="allSlider">
        <Slider data={s1Data}/>
        <Slider data={s2Data}/>
        <Slider data={s3Data}/>
      </div>
      <div style={{height:"2000px",width:"100%",background:"pink"}}></div>
    </div>
  )
}

export default App