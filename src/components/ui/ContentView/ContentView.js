import React from "react";
import JobInfo from "./JobInfo";
import Board from "./Board/Board";

const ContentView = () => {
  return (
    <div className="w-full ">
      <JobInfo />

      <Board />
    </div>
  );
};

export default ContentView;
