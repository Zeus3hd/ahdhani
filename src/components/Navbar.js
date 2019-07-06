import React from "react";

export default class Navbar extends React.Component {
  state = {
    menu: false
  };
  componentDidMount() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  }

  menu = () => {
    this.setState(prevState => {
      return {
        menu: !this.state.menu
      };
    });
  };
  render() {
    return (
      <div className="nav-bar">
        <button id="menu-button" href="#none" onClick={this.menu}>
          <img src={require("../assets/imgs/menu.svg")} alt="menu" />
        </button>
        <nav id={this.state.menu ? "navbar-show" : ""}>
          <ul>
            <li>
              <a href="#landing-content">HOME</a>
            </li>
            <li>
              <a href="#mystack">STACK/SKILLS</a>
            </li>
            <li>
              <a href="#projects">MY WORK</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
