import React from "react";

const Navbaar = () => {
  return (
    <nav className="flex justify-between m-auto border-b-2 sm:px-5 md:px-16 py-5 text-lg font-medium shadow-sm">
      <div className="flex gap-1 cursor-pointer font-bold text-[19px]">
        <span>coding</span>
        <span>decoding</span>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-5">
          <li className="cursor-pointer hover:text-blue-400">Home</li>
          <li className="cursor-pointer hover:text-blue-400">About</li>
          <li className="cursor-pointer hover:text-blue-400">Projects</li>
          <li className="cursor-pointer hover:text-blue-400">Contacts</li>
        </ul>
      </div>
      <div className="md:hidden block cursor-pointer hover:text-blue-600">
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
          class="mobile-menu"
        >
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbaar;
