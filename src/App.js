import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
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
