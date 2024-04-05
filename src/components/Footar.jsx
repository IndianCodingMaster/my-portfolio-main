import React from "react";

const Footar = () => {
  return (
    <div className="bg-[#2D2E32] text-white py-14 sm:text-center md:text-left">
      <div className="flex justify-around items-center sm:max-w-[90vw] md:max-w-[80vw] m-auto sm:flex-col sm:gap-5 md:flex-row">
        <p className="font-bold md:text-lg">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/satyaprakash911"
            target="_blank"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 delay-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="tabler-icon tabler-icon-brand-linkedin"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a
            href="https://github.com/IndianCodingMaster"
            target="_blank"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 delay-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
          <div className="w-[30px] h-[30px] bg-white rounded-full text-black text-xl flex justify-center items-center">
            <p>R</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footar;
