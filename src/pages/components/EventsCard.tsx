import React from "react";

import CalendarIcon from "./icons/CalendarIcon";
import ClockIcon from "./icons/ClockIcon";

const EventsCard = () => {
  return (
    <div className="bg-[#21242d] w-full flex flex-row pb-4 rounded-[8px] p-4">
      <div className="left ">
        <div className="flex flex-row pb-3  ">
          {" "}
          <h3 className="text-lg font-sans font-semibold pr-2">
            Mastering Video Editing
          </h3>{" "}
          <div className="bg-[#12141acb]  text-[#00FFBE] font-sans font-semibold text-xs bg-opacity-80 px-2 shadow-4xl inner-shadow rounded-[8px] h-6  flex justify-center items-center">
            Module 1
          </div>
        </div>

        <p className="text-xxs font-sans font-normal text-xs pb-8">
          Lorem ipsum dolor sit amet
        </p>
        <button className="bg-gradient-to-b flex flex-row items-center from-[#636de6] to-[#5866fd] border-0 rounded text-white shadow-lg shadow-black/30 cursor-pointer font-['Montserrat',sans-serif] text-sm  py-[8px] px-[15px] text-center select-none touch-manipulation">
          <CalendarIcon />
          <span className="pl-2">Add to Calendar</span>
        </button>
      </div>
      <div className="right border-8 border-[#21242d] rounded-lg shadow-2xl ">
        <div className="flex flex-col  px-6 py-4 bg-[#181b24] rounded-[8px]">
          <div className="flex flex-row justify-between">
            <span className="font-sans font-bold text-xl text-[#00FFBE] pb-3">
              20
            </span>
            <ClockIcon strokeColor={"#00FFBE"} />
          </div>
          <span className="font-sans text-sm pb-1 ">September</span>
          <span className="font-sans font-bold text-[#377ba2] text-sm ">
            9:00 PM
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
