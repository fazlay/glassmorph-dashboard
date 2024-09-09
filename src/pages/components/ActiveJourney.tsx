import React from "react";

import CourseCard from "./CourseCard";
import EventsCard from "./EventsCard";

const ActiveJourney = () => {
  // <motion.div initial={false} animate={{ x: 100 }} />
  return (
    <div className="flex flex-row">
      <div>
        <div className="flex flex-row pb-5 ">
          <h3 className="text-gray-400 font-sans font-semibold text- flex flex-row items-center">
            <span> Active Journeys</span>
            <span className="mx-3">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
          </h3>
          <p className="text-gray-400 font-sans font-semibold text-sm underline">
            View All
          </p>
        </div>
        <div className="flex flex-row">
          {[1, 2].map((item) => (
            <CourseCard />
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row pb-5 ">
          <h3 className="text-gray-400 font-sans font-semibold text- flex flex-row items-center">
            <span> Upcoming Events</span>
          </h3>
        </div>
        <div className="flex flex-row">
          <EventsCard />
        </div>
      </div>
    </div>
  );
};

export default ActiveJourney;
