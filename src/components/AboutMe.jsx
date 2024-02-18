import React from "react";

const AboutMe = () => {
  return (
    <div className="px-10 py-28 m-auto flex justify-center items-center md:gap-20 sm:gap-8 xl:max-w-[80vw] md:max-w-[90vw] sm:flex-col md:flex-row">
      <div className="max-w-[450px] md:h-[350px] rounded-xl">
        <img
          className="w-full h-full rounded-xl "
          src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          alt="image"
        />
      </div>
      <div className="w-[34rem] flex sm:flex-col sm:justify-center sm:items-center md:items-start sm:text-center md:text-left gap-5">
        <h3 className="text-lg font-bold text-blue-500">ABOUT ME</h3>
        <h2 className="text-2xl font-bold">
          Front-end Developer <br />
          based in Uttar Pradesh, india 📍
        </h2>
        <p>
          Hey, my name is Satya Prakash, and I'm a Frontend Developer. My
          passion is to create and develop a clean UI/UX for my users.
        </p>
        <p>
          My main stack currently is React/Next.js in combination with Tailwind
          CSS and JavaScript.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
