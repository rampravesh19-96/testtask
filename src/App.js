import React from "react";
import Carousel from "./components/Carousel";
import img1 from "./images/carousel1.png";
import img2 from "./images/carousel2.png";
import imga1 from "./images/smperson.png";
import imgicon1 from "./images/qtupdate.svg";
import imgicon2 from "./images/imgicon2.png";
import imgicon3 from "./images/imgicon3.png";
import bluebg from "./images/bluebg.png";
import graph from "./images/graph.svg";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Layout from "./components/Layout";
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
const carouselData1 = [
  {
    img: img1,
    alt: "",
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: img2,
    alt: "",
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },
  {
    img: img1,
    alt: "",
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: img2,
    alt: "",
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },
];
const carouselData2 = [
  {
    img: imga1,
    alt: "",
    heading: "Headline #1",
    subHeading1: "Home / Why work with us1",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque1.",
  },
  {
    img: img2,
    alt: "",
    heading: "Headline #2",
    subHeading1: "Home / Why work with us2",
    subHeading2:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, atque2.",
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Carousel carouselData={carouselData1} />
      <div className="devider1"></div>
      <div className="allSlider">
        <Slider data={s1Data} />
        <Slider data={s2Data} />
        <Slider data={s3Data} />
      </div>
      <div className="carousel2">
        <div className="left">
          <div className="layoutChange">
            <h2>We <span>stay connected</span></h2>
            <div className="subheadAndIcon">
              <div className="headAndIcon">
                <img src={imgicon1} alt="" />
                <h3>Quarterly Business Updates</h3>
              </div>
              <div className="devider2">
                <div className="verDevider"></div>
                <div className="hdevider"></div>
              </div>
            </div>
            <p>
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </p>
            <div className="subheadAndIcon">
              <div className="headAndIcon">
                <img src={imgicon2} alt="" />
                <h3>Quarterly Business Updates</h3>
              </div>{" "}
            </div>
            <br />
            <br />
            <div className="subheadAndIcon">
              <div className="headAndIcon">
                <img src={imgicon3} alt="" className="bgicon" />
                <h3>Quarterly Business Updates</h3>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="right">
          <Carousel
            carouselData={carouselData2}
            newRation={true}
            text={false}
          />
        </div>
      </div>
      <div className="midgraphsec">
        <div className="img" style={{ backgroundImage: `url(${bluebg})` }}>
          <div className="top">
            <div className="left">
              <div style={{ width: "100%" }}>
                <h1>
                  We believe in <span>diversity & inclusion</span>
                </h1>
              </div>
            </div>
            <div className="right">
              <div style={{ width: "100%" }}>
                <p>
                  At CaSE we do not just accept difference — we celebrate it, we
                  support it, and we thrive on it for the benefit of our
                  employees, our services, our industry and our community. We
                  are proud to be an equal opportunity employer. Guided by our
                  values and beliefs, we foster an inclusive workplace culture
                  where employees thrive because of their differences, not in
                  spite of them.
                </p>
                <p>
                  Our values and beliefs, we foster an inclusive workplace
                  culture where employees thrive because of their differences,
                  not in spite of them Our Commitment to reinventing the
                  standard. With more than 20 nationalities represented in our
                  global workforce, we firmly believe that our ability to
                  deliver high-quality results is fueled by our active efforts
                  to embed diversity and inclusion. We recognise, respect, and
                  strive to create an environment where employees can excel and
                  feel a true sense of belonging.
                </p>
                <h2>Some of our strategic initiatives include:</h2>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div style={{ width: "100%" }}>
            <div className="graph">
              <img src={graph} alt="" height={"100%"} width={"100%"} />
            </div>
          </div>
        </div>
      </div>
        <br />
        <br />
        <br />
      <Layout />
    </div>
  );
};

export default App;
