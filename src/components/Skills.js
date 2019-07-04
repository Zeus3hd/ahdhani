import React from "react";

const Skills = () => (
  <div className="skills-container">
    <div className="section-container">
      <div id="features">
        <h4>WELL DESIGNED</h4>
        <h4>TESTABLE</h4>
        <h4>SCALABLE</h4>
        <h4>CROSS-PLATFORM</h4>
        <h4>RESPONSIVE</h4>
        <h4>SECURE</h4>
      </div>
      <hr />
      <div id="stack">
        <div>
          <img
            src={require("../assets/imgs/icons8-javascript.svg")}
            alt="skill-logo"
          />
          <p>JavaScript</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-nodejs (1).svg")}
            alt="skill-logo"
          />
          <p>NodeJS</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-python.svg")}
            alt="skill-logo"
          />
          <p>Python</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-react.svg")}
            alt="skill-logo"
          />
          <p>ReactJS</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-react-native-filled.svg")}
            alt="skill-logo"
          />
          <p>React Native</p>
        </div>
        <div>
          <img src={require("../assets/imgs/redux.svg")} alt="skill-logo" />
          <p>Redux</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-mongodb.svg")}
            alt="skill-logo"
          />
          <p>MongoDB</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-css3-filled.svg")}
            alt="skill-logo"
          />
          <p>CSS & SASS</p>
        </div>
        <div>
          <img
            src={require("../assets/imgs/icons8-html-5.svg")}
            alt="skill-logo"
          />
          <p>HTML5</p>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
