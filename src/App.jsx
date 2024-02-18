import React from "react";
import "./App.css";
import Navbaar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div>
      <Navbaar />
      <Main />
      <Skills />
      <AboutMe />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default App;
