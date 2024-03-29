import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="sm:px-14 md:px-24 py-16 sm:ma-w-[90vw] md:max-w-[70vw] m-auto"
    >
      <div className="flex flex-col gap-3 sm:text-center md:text-left">
        <h3 className="text-blue-600 font-bold text-xl">CONTACT</h3>
        <h4 className="sm:text-xl md:text-2xl font-bold tracking-wide">
          Don't be shy! Hit me up! 👇
        </h4>
      </div>
      <div className="flex gap-16 py-14 sm:flex-col md:flex-row">
        <div className="flex items-center gap-4 sm:flex-col md:flex-row sm:text-center md:text-left">
          <span className="border rounded-full flex justify-center items-center w-14 h-14 shadow-lg shadow-black-500/500 text-blue-600">
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
              class="tabler-icon tabler-icon-map-search"
            >
              <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
              <path d="M9 4v13"></path>
              <path d="M15 7v5"></path>
              <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M20.2 20.2l1.8 1.8"></path>
            </svg>
          </span>
          <div>
            <h3 className="text-blue-600 font-bold text-lg">Location</h3>
            <p className="text-base text-gray-500">Uttar Pradesh, India</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:flex-col md:flex-row sm:text-center md:text-left">
          <span className="border rounded-full flex justify-center items-center w-14 h-14 shadow-lg shadow-black-500/500 text-blue-600">
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
              class="tabler-icon tabler-icon-mail"
            >
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
          </span>
          <div>
            <h3 className="text-blue-600 font-bold text-lg">Gmail</h3>
            <p className="text-base text-gray-500">
              satyaprakash91180@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
