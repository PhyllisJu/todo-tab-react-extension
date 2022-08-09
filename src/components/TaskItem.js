import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function TaskItem(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Checkbox />
      <span
        style={{
          flex: 0.6,
        }}
      >
        {props.task.title}
      </span>
      <div
        style={{
          flex: 0.3,
        }}
      >
        <span>{props.task.dueDate}</span>
        <span>{props.task.dueTime}</span>
      </div>
      <div
        style={{
          flex: 0.1,
        }}
      >
        <DeleteIcon />
      </div>
    </div>
  );
}
