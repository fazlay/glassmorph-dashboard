import React from "react";

import HumanIcon from "./icons/HumanIcon";
import NotificationIcon from "./icons/NotificationIcon";

const ClientNavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full h-[80px]">
      <div>
        <div className=" text-2xl    ">
          <span className="pr-2 font-sans font-normal">Welcome Back</span>
          <span className=" absolute font-sans font-bold top-2/5 left-2/5 bg-gradient-to-r from-[#e7cc31] via-[#ff6b08] via-[#cf23cf] to-[#f32170] text-transparent bg-clip-text">
            Rafayet Rakib !
          </span>
        </div>
      </div>
      <div className="flex flex-row">
        <div
          className={` rounded-[9px] text-sm 
         p-2 flex items-center border-white border-[1px] border-opacity-10  text-primary-500 bg-white bg-opacity-15
        text-[#00FFBE] mr-4 `}
        >
          <>
            {" "}
            <HumanIcon />{" "}
            <span className="px-2 font-sans font-bold">Skool Community</span>
          </>
        </div>
        <div
          className={` rounded-[9px] text-sm 
          p-2 flex items-center border-white border-[1px] border-opacity-10 text-primary-500 bg-white bg-opacity-15
        text-[#FF5C00] mr-4 `}
        >
          <>
            {" "}
            <NotificationIcon />{" "}
            <span className="px-2 font-sans font-bold">03</span>
          </>
        </div>
      </div>
    </div>
  );
};

export default ClientNavBar;
