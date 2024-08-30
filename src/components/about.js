import React from "react";
import HTML from "../assest/HTML5_Badge.svg";
import CSS from "../assest/css-3.svg";
import JAVASCRIPT from "../assest/javascript.svg";
import REACT from "../assest/react.svg";
// import REACt from "../assest/"
import "./About.css";

function about() {
  return (
    <section id="about">
      <span className="aboutTitle">What I know</span>
      <span className="aboutDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS, and JavaScript
      </span>

      <div className="aboutBars">
        <div className="aboutBar">
          <img src={HTML} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>HTML</h2>
            <p>Hyper Text Markep Language</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={CSS} alt="CSS" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>CSS</h2>
            <p>Cascadind Style sheet</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={JAVASCRIPT} alt="" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>JAVASCRIPT</h2>
            <p>JAVASCRIPT</p>
          </div>
        </div>
      </div>
      <div className="aboutBars">
        <div className="aboutBar">
          <img src={REACT} alt="REACT" className="aboutBarImg" />
          <div className="aboutBarText">
            <h2>REACT</h2>
            <p>REACT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default about;
