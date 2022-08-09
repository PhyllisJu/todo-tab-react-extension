import React from "react";
import { categories, tasks } from "../sampleObjects";
import TaskBoard from "./TaskBoard";

export default function TaskBoards() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "10px 0px",
      }}
    >
      {categories.map((category, index) => (
        <TaskBoard category={category} tasks={tasks[index]} />
      ))}
    </div>
  );
}
