import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="py-14 px-16 m-auto bg-[#F9F9F9] text-center text-2xl font-bold"
    >
      <h4 className="text-3xl mb-5 text-blue-600">Projects 🤠</h4>
      <Project />
    </div>
  );
};

export default Projects;
