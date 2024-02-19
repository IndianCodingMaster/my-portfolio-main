import React, { useState } from "react";

const Navbaar = () => {
  const [sidebar, setSidebar] = useState(true);

  function showMenu() {
    setSidebar(!sidebar);
  }

  function closeMenu() {
    setSidebar(!sidebar);
  }

  return (
    <nav className="flex justify-between m-auto border-b-2 sm:px-5 md:px-16 py-5 text-lg font-medium shadow-sm">
      <div className="flex gap-1 cursor-pointer font-bold text-[19px]">
        <span>coding</span>
        <span>decoding</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5">
          <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
            Projects
          </li>
          <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
            Contacts
          </li>
        </ul>
      </div>
      <div className="md:hidden block cursor-pointer hover:text-blue-600">
        <button>
          {sidebar ? (
            <div className="w-[100vw] h-[100vh] flex justify-center items-start fixed top-0 right-0 font-bold text-center bg-gray-50">
              <button
                onClick={closeMenu}
                className="absolute top-5 right-5 text-3xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 26 26"
                  stroke-width="2"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col gap-10 mt-20 text-2xl w-full">
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Home
                </li>
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  About
                </li>
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Projects
                </li>
                <li className="cursor-pointer hover:text-blue-400 delay-75 transition-all ease-in">
                  Contacts
                </li>
              </ul>
            </div>
          ) : (
            <button onClick={showMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mobile-menu"
              >
                <path d="M4 6l16 0"></path>
                <path d="M4 12l16 0"></path>
                <path d="M4 18l16 0"></path>
              </svg>
            </button>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbaar;
