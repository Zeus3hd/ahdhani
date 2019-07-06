import React from "react";

const Projects = () => (
  <div id="projects">
    <p>I take pride in what I do</p>
    <div className="projects-container">
      <div id="project1">
        <img src={require("../assets/imgs/project1.jpeg")} alt="projects-img" />
        <strong>TITLE ONE</strong>
        <p>
          lorem ipsum mother fuck wohoh some words too lazy to use lorem ipsum
          and the fucking plugin isn't working
        </p>
      </div>
      <div id="project2">
        <img src={require("../assets/imgs/project2.jpg")} alt="projects-img" />
        <strong>TITLE ONE</strong>
        <p>
          lorem ipsum mother fuck wohoh some words too lazy to use lorem ipsum
          and the fucking plugin isn't working
        </p>
      </div>
      <div id="project3">
        <img src={require("../assets/imgs/project3.jpeg")} alt="projects-img" />
        <strong>TITLE ONE</strong>
        <p>
          lorem ipsum mother fuck wohoh some words too lazy to use lorem ipsum
          and the fucking plugin isn't working
        </p>
      </div>
    </div>
  </div>
);

export default Projects;
