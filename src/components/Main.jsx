import React from "react";
import profileImg from "../assets/profile.jpg";

const Main = () => {
  return (
    <main className="bg-[#F9F9F9] shadow-md">
      <section className="sm:pt-12 md:py-28 flex sm:flex-col-reverse md:flex-row justify-center items-center gap-10  xl:max-w-[80vw] md:max-w-[90vw] lg:gap-38 md:gap-28 sm:m-auto ">
        <div className="lg:pt-8 pb-8 flex flex-col gap-7 md:justify-center sm:items-center md:items-start">
          <div className="flex flex-col sm:items-center md:items-start gap-2 w-[430px]">
            <h2 className="md:text-5xl sm:text-4xl font-extrabold text-[#2D2E32]">
              Front-End React
            </h2>
            <h2 className="md:text-5xl sm:text-4xl font-extrabold text-[#2D2E32]">
              Developer
            </h2>
          </div>

          <div className="flex flex-col sm:items-center md:items-start max-w-[500px] text-sm mx-1 m-auto">
            <p>Hi, I'm Stefan Topalovic. A passionate Front-end React</p>
            <p> Developer based in Belgrade, Serbia. 📍</p>
          </div>

          <div className="flex gap-4">
            <a href="" className="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-linkedin"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <a href="" className="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-brand-github"
              >
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px] rounded-full flex justify-center items-center overflow-hidden ">
          <img
            className="w-[300px] h-[300px] rounded-full"
            src={profileImg}
            alt="profile"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
