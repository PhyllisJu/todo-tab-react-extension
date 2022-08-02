import React from "react";
import "./TimeInput.css";

export default function TimeInput(props) {
  return (
    <div className="time-input">
      <input
        type="number"
        name="hour"
        value={props.hour}
        min="0"
        max="12"
        onChange={props.onChange}
      />
      <span>:</span>
      <input
        type="number"
        name="minute"
        value={props.minute}
        min="0"
        max="59"
        onChange={props.onChange}
      />
    </div>
  );
}
