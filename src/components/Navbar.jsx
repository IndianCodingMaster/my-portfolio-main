import React, { useState } from "react";

const Navbaar = () => {
  const [sidebar, setSidebar] = useState(false);

  function showMenu() {
    setSidebar(true);
  }

  function closeMenu() {
    setSidebar(false);
  }

  return (
    <nav className="flex justify-between m-auto border-b-2 sm:px-5 md:px-16 py-5 text-lg font-medium shadow-sm">
      <div>
        <a href="/" className="flex gap-1 cursor-pointer font-bold text-[19px]">
          <span>coding</span>
          <span>Decoding</span>
        </a>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5">
          <a href="/">
            <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
              Home
            </li>
          </a>
          <a href="#aboutme">
            <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
              About
            </li>
          </a>
          <a href="#projects">
            <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
              Projects
            </li>
          </a>
          <a href="#contact">
            <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
              Contacts
            </li>
          </a>
        </ul>
      </div>
      <div className="md:hidden block ">
        {sidebar ? (
          <div className="w-[50vw] h-[100vh] flex justify-center items-start fixed top-0 right-0 font-bold text-center bg-gray-50">
            <button
              onClick={closeMenu}
              className="absolute top-5 right-4 text-3xl hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 26"
                strokeWidth="2"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col gap-10 mt-20 text-2xl w-full">
              <a href="/">
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Home
                </li>
              </a>
              <a href="#aboutme">
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  About
                </li>
              </a>
              <a href="#projects">
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Projects
                </li>
              </a>
              <a href="#contact">
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Contacts
                </li>
              </a>
            </ul>
          </div>
        ) : (
          <div className="cursor-pointer hover:text-blue-600 delay-75 transition-all ease-in">
            <button onClick={showMenu}>
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
                className="mobile-menu"
              >
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbaar;
