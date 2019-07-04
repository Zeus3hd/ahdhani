import React from "react";

const Projects = () => (
  <div id="projects">
    <h2>I take pride in what I do</h2>
    <div className="projects-container">
      <div id="project1">
        <img src={require("../assets/imgs/project1.jpeg")} />
      </div>
      <div id="project2">
        <img src={require("../assets/imgs/project2.jpg")} />
      </div>
      <div id="project3">
        <img src={require("../assets/imgs/project3.jpeg")} />
      </div>
    </div>
  </div>
);

export default Projects;
