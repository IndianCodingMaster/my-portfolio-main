import React from "react";
import "./App.css";
import Navbaar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Navbaar />
      <Main />
      <Skills />
      <AboutMe />
    </div>
  );
};

export default App;
