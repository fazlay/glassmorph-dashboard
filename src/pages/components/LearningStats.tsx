import React from "react";

import LearningProgress from "./LearningProgress";
import LearningStatsCard from "./LearningStatsCard";

const LearningStats = () => {
  return (
    <div className="flex flex-row gap-8 pb-12">
      <LearningProgress />
      <LearningStatsCard />
    </div>
  );
};

export default LearningStats;
