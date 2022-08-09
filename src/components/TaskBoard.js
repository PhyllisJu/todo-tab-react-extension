import React from "react";
import TaskItem from "./TaskItem";

export default function TaskBoard(props) {
  return (
    <div>
      <div>{props.category}</div>
      <div>
        {props.tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </div>
  );
}
