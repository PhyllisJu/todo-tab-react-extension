import React from "react";
import TaskBoards from "./TaskBoards";

// TODO: add a progress bar
export default function TaskArea() {
  return (
    <div
      style={{
        width: "99%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TaskBoards />
    </div>
  );
}
