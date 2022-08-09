import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";

// TODO: customize the checkbox color
export default function TaskItem(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontSize: "16px",
        fontWeight: 400,
        margin: "5px 0",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          flex: 0.6,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox
          sx={{
            margin: 0,
            padding: 0,
            fontSize: "16px",
          }}
          iconStyle={{ fill: "#A7B4AF" }}
          disableRipple
        />
        <label style={{ marginLeft: "10px" }}>{props.task.title}</label>
      </div>

      <div
        style={{
          flex: 0.3,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span>{props.task.dueDate}</span>
        <span style={{ marginLeft: "10px" }}>{props.task.dueTime}</span>
      </div>

      <div
        style={{
          flex: 0.1,
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <DeleteIcon
          sx={{
            fill: "#A7B4AF",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
}
