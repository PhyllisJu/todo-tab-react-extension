import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function TaskItem(props) {
  return (
    <div>
      <Checkbox />
      <span>{props.task.title}</span>
      <div>
        <span>{props.task.dueDate}</span>
        <span>{props.task.dueTime}</span>
      </div>
      <DeleteIcon />
    </div>
  );
}
