import React from "react";

const Skills = () => (
  <div className="skills-container">
    <h2 id="skills-phrase">Some Phrase</h2>
    <div className="section-container">
      <div id="features">
        <div className="item-1">
          <p>WELL-DESIGNED</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
          </p>
        </div>

        <div className="item-2">
          <p>SCALABLE</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
        </div>

        <div className="item-3">
          <p>RESPONSIVE</p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
          </p>
        </div>
      </div>
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
