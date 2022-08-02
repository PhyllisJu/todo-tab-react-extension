import React from "react";
import "./TaskInput.css";

export default function TaskInput(props) {
  return (
    <input
      type="text"
      className="task-input"
      placeholder="Input your task here"
      maxLength="60"
      value={props.input}
      onChange={props.onChange}
      spellCheck="false"
      required
    />
  );
}
