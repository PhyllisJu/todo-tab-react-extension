import React from "react";
import { categories, tasks } from "../sampleObjects";
import TaskBoard from "./TaskBoard";

export default function TaskBoards() {
  return (
    <div>
      {categories.map((category, index) => (
        <TaskBoard category={category} tasks={tasks[index]} />
      ))}
    </div>
  );
}
