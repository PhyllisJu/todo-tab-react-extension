import React from "react";
import TaskItem from "./TaskItem";

export default function TaskBoard(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 0.2,
          padding: "5px",
        }}
      >
        <span>{props.category.title}</span>
      </div>
      <div
        style={{
          flex: 0.8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5px",
        }}
      >
        {props.tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </div>
  );
}
