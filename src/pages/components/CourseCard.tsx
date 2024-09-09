import { motion } from "framer-motion";
import React from "react";

import PlayIcon from "./icons/PlayIcon";

const CourseCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="w-[260px] mr-3 bg-gradient-to-b from-purple-400 to-purple-700 rounded-[8px] p-4 text-white shadow-sm transition duration-300 ease-in-out hover:opacity-80 py-[10px]"
    >
      <div className=" flex flex-row justify-between flex-start pb-[12px]">
        <div className="bg-[#5d327e86] font-sans font-semibold text-xs bg-opacity-80 px-2 shadow-4xl inner-shadow rounded-[8px] h-6  flex justify-center items-center">
          Module 1
        </div>
        <div className="bg-[#45235f86] bg-opacity-80 shadow-4xl rounded-full h-10 w-10 flex justify-center items-center">
          <PlayIcon />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-sans font-semibold">Video Editing</h3>
        <p className="text-xxs font-sans font-normal text-xs">
          Lorem ipsum dolor sit amet
        </p>

        <div className="w-full bg-purple-400 rounded-full h-2.5 my-2">
          <div
            className="bg-white h-2.5 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
        <p className="text-xs font-normal">5% Completed</p>
      </div>
    </motion.div>
  );
};

export default CourseCard;
