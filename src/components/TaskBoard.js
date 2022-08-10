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
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          padding: "10px 20px",
          backgroundColor: props.category.color,
          borderBottom: "2px solid #C8DCD5",
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 15px",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          {props.category.title}
        </span>
        {/* TODO: add a progress bar */}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 20px",
          backgroundColor: "#FAFAFA",
          borderRadius: "0 0 10px 10px",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 15px",
        }}
      >
        {props.tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </div>
  );
}
