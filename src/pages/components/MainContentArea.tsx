import React from "react";

import ActiveJourney from "./ActiveJourney";
import ClientNavBar from "./Clientnavbar";
import LearningStats from "./LearningStats";

const MainContentArea = () => {
  return (
    <div className="w-full pr-12 pl-14">
      <ClientNavBar />
      <LearningStats />
      <ActiveJourney />
    </div>
  );
};

export default MainContentArea;
