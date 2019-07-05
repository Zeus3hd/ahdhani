import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Logo />
      <Skills />
    </div>
  );
}

export default App;
