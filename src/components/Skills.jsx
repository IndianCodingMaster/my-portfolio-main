import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5  md:gap-10 py-10">
      <div className="flex text-xl font-semibold gap-10">
        <p>Tech Stack</p>
        <div className="text-2xl text-gray-400 hidden md:block">|</div>
      </div>
      <div>
        <ul className="flex flex-wrap gap-7 justify-center">
          <li className="cursor-pointer ">
            <img src="https://skillicons.dev/icons?i=html,css" alt="" />
          </li>
          <li className="cursor-pointer">
            <img src="https://skillicons.dev/icons?i=js,ts" alt="" />
          </li>
          <li className="cursor-pointer">
            <img src="https://skillicons.dev/icons?i=react,next" alt="" />
          </li>
          <li className="cursor-pointer">
            <img src="https://skillicons.dev/icons?i=tailwind,scss" alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
