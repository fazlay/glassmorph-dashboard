import React from "react";

import HomeIcon from "./icons/HomeIcon";

const Sidebar = () => {
  return (
    <div className="w-[340px] pl-4 ">
      <div className="font-bold h-[60px] flex items-center">DropOut Skool</div>
      <div className=" bg-[#818a9c] bg-opacity-15 h-screen rounded-[5px] pt-4">
        <ul className="pl-[15px]">
          {[1, 2, 3, 4, 5].map((item) => (
            <li className="py-2 rounded-[5px] px-2 flex flex-row items-center transition-colors duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#418b92] hover:via-transparent hover:to-transparent group">
              <HomeIcon className="mr-2 stroke-current group-hover:stroke-[#63dce7]" />
              <span className="group-hover:text-[#63dce7]">Home</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
