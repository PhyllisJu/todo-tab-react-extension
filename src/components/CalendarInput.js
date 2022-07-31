import React from "react";
import "./CalendarInput.css";
import { ReactComponent as CalendarIcon } from "../icons/calendar.svg";

export default function CalendarInput() {
  return (
    <div
      className="calendar-input"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input type="date" />
      {/* <CalendarIcon
        style={{
          marginLeft: "10px",
        }}
      /> */}
    </div>
  );
}
