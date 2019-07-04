import React from "react";

const Header = () => (
  <div id="header-component">
    <div id="landing-content">
      <img
        id="header-img"
        src={require("../assets/imgs/ahd.jpg")}
        alt="testpic"
      />
      <p>
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
      </p>
    </div>
  </div>
);

export default Header;

// {      <img
//   src={require("../assets/imgs/icons8-github-500.png")}
//   alt="testpic"
// />

// <img
//   src={require("../assets/imgs/icons8-facebook-500.png")}
//   alt="testpic"
// />

// <img src={require("../assets/imgs/icons8-gmail-500.png")} alt="testpic" />

// <img
//   src={require("../assets/imgs/icons8-github-500.png")}
//   alt="testpic"
// />

// <img
//   src={require("../assets/imgs/icons8-github-500.png")}
//   alt="testpic"
// />}
