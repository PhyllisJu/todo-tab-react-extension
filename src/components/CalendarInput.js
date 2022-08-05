/* global chrome */
import React from "react";
import "./CalendarInput.css";

export default function CalendarInput(props) {
  return (
    <input
      type="date"
      className="calendar-input"
      value={props.input}
      onChange={props.onChange}
    />
  );
}
