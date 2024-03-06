import React from "react";
import weatherapp from "../assets/weather-app.png";
import imageslider from "../assets/image-slider.png";

const Project = () => {
  return (
    <div className=" flex justify-center items-center flex-wrap gap-7">
      <div className="p-5 rounded-2xl shadow-xl w-[400px] h-[570px]">
        <img
          className="shadow-xl hover:scale-95 delay-75 transition-all ease-in w-[100%] h-[90%] object-cover rounded-lg"
          src={weatherapp}
          alt=""
        />
        <div className="mt-4 flex justify-evenly items-center gap-4">
          <button className="hover:bg-blue-600 hover:text-white md:w-[8rem] sm:text-sm border-[2px] border-blue-600 px-4 py-2.5 rounded-full delay-75 transition-all ease-in hover:scale-110">
            <a href="https://github.com/IndianCodingMaster/Weather-App">
              GitHub
            </a>
          </button>
          <button className="hover:bg-blue-600 hover:text-white md:w-[8rem] sm:text-sm border-[2px] border-blue-600 px-4 py-2.5 rounded-full delay-75 transition-all ease-in hover:scale-110">
            <a href="https://weather-app-satya.vercel.app/">Live Demo</a>
          </button>
        </div>
      </div>
      <div className="p-5 rounded-2xl shadow-xl w-[400px] h-[570px]">
        <img
          className="shadow-xl hover:scale-95 delay-75 transition-all ease-in w-[100%] h-[90%] object-cover rounded-lg"
          src={imageslider}
          alt=""
        />
        <div className="mt-4 flex justify-evenly items-center gap-4">
          <button className="hover:bg-blue-600 hover:text-white md:w-[8rem] sm:text-sm border-[2px] border-blue-600 px-4 py-2.5 rounded-full delay-75 transition-all ease-in hover:scale-110">
            <a href="https://github.com/IndianCodingMaster/Image-Slider">
              GitHub
            </a>
          </button>
          <button className="hover:bg-blue-600 hover:text-white md:w-[8rem] sm:text-sm border-[2px] border-blue-600 px-4 py-2.5 rounded-full delay-75 transition-all ease-in hover:scale-110">
            <a href="https://image-slider-satya.vercel.app/">Live Demo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
