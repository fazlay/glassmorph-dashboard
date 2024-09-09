import { motion } from "framer-motion";
import React from "react";

import PlayIcon from "./icons/PlayIcon";

const LearningProgress = () => {
  return (
    <div className="w-1/2 border-2 border-gray-600 rounded-[10px] py-6 p-8">
      <h3 className="text-lg font-sans font-semibold">Video Editing</h3>
      <div className="flex flex-row">
        <p className="text-xxs font-sans font-normal text-xs text-gray-400">
          Lorem ipsum dolor sit amet
        </p>
        <span className="pl-2 text-[#FF5C00] font-sans font-semibold text-xs ">
          Module 1
        </span>
      </div>
      {/* border-4 border-[#008185] border-opacity-40 */}
      <div className="my-6 rounded-full   shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.0),_10px_5px_30px_4px_rgba(62,215,229,0.2)]">
        {" "}
        <div className="w-full bg-[#191c23] border-2 border-[#008185] border-opacity-30  rounded-full h-[21px] my-2">
          <div
            className="bg-gradient-to-r from-[#008185] to-[#3ed7e5] h-4 rounded-full"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="bg-gradient-to-b flex flex-row items-center from-[#0380d4] to-[#0456aa] border-0 rounded-full text-white shadow-lg shadow-black/30 cursor-pointer font-sans font-semibold text-sm  py-[8px] px-[15px] text-center select-none touch-manipulation"
      >
        <span className="pr-2">Continue Learning</span>
        <PlayIcon />
      </motion.button>
    </div>
  );
};

export default LearningProgress;
