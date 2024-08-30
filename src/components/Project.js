import React from "react";
import "./Project.css";
import Banner from "../assest/project.jpg";

function Project() {
  return (
    <section id="project">
      <h2 className="projectTitle">My Projects</h2>
      <span className="projectDesc">Here are my projects</span>

      <div className="project-item">
        <div className="item-details">
          <p className="p1">Project-1</p>
          <p className="p2">TechStack:-HTML and CSS</p>
        </div>
        <a href="">
          <img src={Banner} alt="project-1" className="projectImg" />
        </a>
      </div>
      <div className="project-item">
        <div className="item-details">
          <p className="p1">Project-2</p>
          <p className="p2">landing page:- HTML, CSS and JS</p>
        </div>
        <a href="">
          <img src={Banner} alt="project-2" className="projectImg" />
        </a>
      </div>
      <div className="project-item">
        <div className="item-details">
          <p className="p1">Project-3</p>
          <p className="p2">Netflix Clone:- HTML, CSS and JS</p>
        </div>
        <a href="">
          <img src={Banner} alt="project-3" className="projectImg" />
        </a>
      </div>
      <div className="project-item">
        <div className="item-details">
          <p className="p1">Project-4</p>
          <p className="p2">Password Generator:- REACT</p>
        </div>
        <a href="">
          <img src={Banner} alt="project-4" className="projectImg" />
        </a>
      </div>
      <div className="project-item">
        <div className="item-details">
          <p className="p1">Project-5</p>
          <p className="p2">TODO ITEM:- REACT</p>
        </div>
        <a href="">
          <img src={Banner} alt="project-5" className="projectImg" />
        </a>
      </div>
    </section>
  );
}

export default Project;
