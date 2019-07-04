import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Logo />
    </div>
  );
}

export default App;
