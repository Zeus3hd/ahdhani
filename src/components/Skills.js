import React from "react";

const Skills = () => (
  <div className="skill-box">
    <div className="skills-container">
      <div className="item-1">
        <h5>RESPONSIBLE</h5>
        <p>Following conventions, standards and best practices</p>
      </div>
      <div className="item-2">
        <h5>TESTABLE</h5>
        <p>Test driven code, more tests = less bugs</p>
      </div>
      <div className="item-3">
        <h5>SCALABLE/CROSS-PLATFORM</h5>
        <p>Adequate for different environments,sizes and platforms.</p>
      </div>
    </div>
    <p id="mystack">MY STACK</p>
    <div className="stack">
      <div>
        <img src={require("../assets/imgs/icons8-javascript.svg")} alt="tool" />
        <p>JavaSript</p>
      </div>
      <div>
        <img src={require("../assets/imgs/icons8-nodejs (1).svg")} alt="tool" />
        <p>NodeJS</p>
      </div>
      <div>
        <img src={require("../assets/imgs/icons8-react.svg")} alt="tool" />
        <p>ReactJs</p>
      </div>
      <div>
        <img
          src={require("../assets/imgs/icons8-react-native-filled.svg")}
          alt="tool"
        />
        <p>ReactNative</p>
      </div>
      <div>
        <img src={require("../assets/imgs/redux.svg")} alt="tool" />
        <p>Redux</p>
      </div>
      <div>
        <img src={require("../assets/imgs/icons8-python.svg")} alt="tool" />
        <p>Python</p>
      </div>
      <div>
        <img src={require("../assets/imgs/icons8-mongodb.svg")} alt="tool" />
        <p>MongoDB</p>
      </div>
      <div>
        <img src={require("../assets/imgs/icons8-html-5.svg")} alt="tool" />
        <p>HTML5</p>
      </div>
      <div>
        <img
          src={require("../assets/imgs/icons8-css3-filled.svg")}
          alt="tool"
        />
        <p>JavaSript</p>
      </div>
    </div>
  </div>
);

export default Skills;
