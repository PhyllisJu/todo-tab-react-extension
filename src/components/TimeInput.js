import React from "react";
import "./TimeInput.css";

export default function TimeInput(props) {
  return (
    <div className="time-input">
      <input
        type="number"
        name="hour"
        value={props.hour}
        onChange={props.onChange}
        onPaste={props.onPaste}
        onBlur={props.onBlur}
        placeholder="hh"
        onKeyDown={props.onKeyDown}
      />
      <span>:</span>
      <input
        type="number"
        name="minute"
        value={props.minute}
        onChange={props.onChange}
        onPaste={props.onPaste}
        onBlur={props.onBlur}
        placeholder="mm"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}
