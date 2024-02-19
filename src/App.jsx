import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Footar from "./components/Footar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Skills />
      <AboutMe />
      <Projects />
      <ContactUs />
      <Footar />
    </div>
  );
};

export default App;
