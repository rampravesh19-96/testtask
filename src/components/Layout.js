import React from "react";
import "./Layout.css";
import img101 from "../images/img101.png";
import img102 from "../images/img102.png";
import img103 from "../images/img103.png";
import img104 from "../images/img104.png";
import img105 from "../images/img105.png";
import img106 from "../images/img106.png";
import img108 from "../images/img108.png";
import img107 from "../images/img107.png";

const Layout = () => {
  return (
    <>
      <div className="bigscreen">
        <div className="grid">
          <div className="left">
            <div className="top">
              <img src={img102} alt="" className="topimg" />
              <img src={img103} alt="" className="bottomimg" />
            </div>
            <div className="bottom" style={{ color: "black" }}>
              <img src={img104} alt="" className="topimg" />
              <div className="bottomCon">
                <div>
                  <div className="heading">
                    <h2>
                      We celebrate <span>success</span>
                    </h2>
                  </div>
                  <p>
                    At CaSE we understand that every achievement, big or small,
                    is a result of the hard work and dedication of our team
                    members. We take pride in celebrating these moments because
                    they underscore the commitment and effort put into each
                    project.
                  </p>
                  <p>
                    Some of our favourite events on the calendar include our
                    coveted Melbourne Cup event and our always amazing Christmas
                    Party. In-between, our team celebrate together during team
                    cycling events, regular team dinners and social morning teas
                    to celebrate milestones and special days. Taking the time to
                    celebrate wins is our way of showing gratitude and ensuring
                    everyone knows their efforts make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <img src={img101} alt="" />
          </div>
        </div>
        <div className="imgadjust">
          <div>
            <img src={img105} alt="" />
          </div>
        </div>
      </div>
      <div className="smallscreen">
        <div className="top">
          <img src={img102} alt="" className="topimg" />
          <img src={img103} alt="" className="bottomimg" />
        </div>
        <div className="bottom">
          <div className="left">
            <img src={img104} alt="" />
            <img src={img101} alt="" />
          </div>
          <div className="right">
            <div>
              <div>
                <div className="heading">
                  <h2>
                    We celebrate <span>success</span>
                  </h2>
                </div>
                <p>
                  At CaSE we understand that every achievement, big or small, is
                  a result of the hard work and dedication of our team members.
                  We take pride in celebrating these moments because they
                  underscore the commitment and effort put into each project.
                </p>
                <p>
                  Some of our favourite events on the calendar include our
                  coveted Melbourne Cup event and our always amazing Christmas
                  Party. In-between, our team celebrate together during team
                  cycling events, regular team dinners and social morning teas
                  to celebrate milestones and special days. Taking the time to
                  celebrate wins is our way of showing gratitude and ensuring
                  everyone knows their efforts make a difference.
                </p>
              </div>
            </div>
            <img src={img105} alt="" />
          </div>
        </div>
      </div>
      <div className="bottomgrid">
        <div className="top">
          <div>
            <div>
              <div className="heading">
                <h2>Employee <span>Appreciation Program</span></h2>
              </div>
              <p>
                Our Employee Appreciation Program is tailored to honor the
                ongoing commitment and efforts of our long-serving team members.
                Our 5 Year Club and 10 Year Club are special milestones within
                this program, celebrating employees who have dedicated half a
                decade or a full decade to our company mission. Each year,
                members of these clubs are invited to annual events held at
                select, memorable locations, reflecting our gratitude and
                recognition of their unwavering dedication. It's our way of
                saying thank you and ensuring that every significant chapter in
                our collective journey is celebrated with the grandeur it
                deserves
              </p>
            </div>
          </div>
          <img src={img106} alt="" />
        </div>
        <div className="bottom">
          <img src={img108} alt="" className="img1st" />
          <img src={img107} alt="" className="img2nd" />
        </div>
      </div>
    </>
  );
};

export default Layout;
