import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Logo />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
