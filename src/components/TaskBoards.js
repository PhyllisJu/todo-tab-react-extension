import React from "react";
import { categories, tasks } from "../sampleObjects";
import TaskBoard from "./TaskBoard";

// TODO: categorize the tasks and generate different task arrays based on different categories
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
