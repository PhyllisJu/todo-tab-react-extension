import React from "react";
import TaskBoards from "./TaskBoards";

export default function TaskArea() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TaskBoards />
    </div>
  );
}
