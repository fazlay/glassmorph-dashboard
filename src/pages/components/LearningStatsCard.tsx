import { motion } from "framer-motion";
import React from "react";

// shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]
const LearningStatsCard = () => {
  return (
    <>
      <div className=" flex flex-row  w-1/2 border-2 border-gray-600 rounded-[10px] relative py-6 p-8 ">
        {[1, 2, 3].map(() => (
          <div
            key={Math.random()}
            className=" w-1/3 flex flex-col items-center  "
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              src="/assets/youtube.png"
              alt="Video Editing"
              className="w-24 h-24 z-10  absolute "
            />
            <div className="w-10 h-10 top-10 absolute   rounded-[20px] shadow-[10px_20px_100px_rgba(255,_0,_0,_1)] bg-opacity-0 bg-transparent"></div>
            <div className="absolute bottom-10">
              <h3 className="text-lg font-sans  font-semibold text-center text-[#FF3131]">
                10
              </h3>
              <p className="text-xxs font-sans  font-normal text-xs text-gray-400">
                Lesson Completed
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LearningStatsCard;
