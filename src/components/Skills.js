import React from "react";

const Skills = () => (
  <div className="skill-box">
    <div className="skills-container">
      <div className="item-1">
        <h5>Test Skill</h5>
        <p>Some Explanation for dem skill</p>
      </div>
      <div className="item-2">
        <h5>Skill Test</h5>
        <p>i got nothing to say about this</p>
      </div>
      <div className="item-3">
        <h5>hakuna matata</h5>
        <p>use your fucking imagination</p>
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
