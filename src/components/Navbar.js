import React from "react";

export default class Navbar extends React.Component {
  state = {
    menu: false
  };

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
        <a id="menu-button" href="#none" onClick={this.menu}>
          <img src={require("../assets/imgs/menu.svg")} alt="menu" />
        </a>
        <nav id={this.state.menu ? "navbar-show" : ""}>
          <ul>
            <li>
              <a href="#Home">HOME</a>
            </li>
            <li>
              <a href="stack">STACK/SKILLS</a>
            </li>
            <li>
              <a href="work">MY WORK</a>
            </li>
            <li>
              <a href="contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
