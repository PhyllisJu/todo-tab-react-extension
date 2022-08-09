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
          padding: "10px 20px",
          backgroundColor: props.category.color,
          borderBottom: "2px solid #C8DCD5",
          boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px 10px 0px 0px",
          display: "flex",
          justifyContent: "space-between",
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
          boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.25)",
          borderRadius: "0 0 10px 10px",
        }}
      >
        {props.tasks.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </div>
  );
}
