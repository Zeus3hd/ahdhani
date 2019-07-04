import React from "react";

const Skills = () => (
  <div className="skills-container">
    <div className="section-container">
      <div id="features">
        <div>
          <h4>WELL DESIGNED</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </div>
        <div>
          <h4>TESTABLE</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of typee
            like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <h4>SCALABLE</h4>{" "}
          <p>
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <h4>CROSS-PLATFORM</h4>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div>
          <h4>RESPONSIVE</h4>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
        <div>
          <h4>SECURE</h4>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </div>
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
