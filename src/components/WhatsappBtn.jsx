import React from "react";
import whatsapp from "../assets/whatsapp.png";

const WhatsappBtn = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=%2B917355453583&text&type=phone_number&app_absent=0"
      target="_blank"
      className="flex justify-center items-center  w-[200px] h-[80px] fixed bottom-[2rem] right-[2rem] overflow-hidden cursor-pointer"
    >
      <img className="w-[50px]" src={whatsapp} alt="whatsapp" />
    </a>
  );
};

export default WhatsappBtn;
