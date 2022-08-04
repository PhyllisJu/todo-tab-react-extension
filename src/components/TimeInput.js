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
        placeholder="08"
        onKeyDown={props.onKeyDown}
      />
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          margin: "0px 8px",
        }}
      >
        :
      </span>
      <input
        type="number"
        name="minute"
        value={props.minute}
        onChange={props.onChange}
        onPaste={props.onPaste}
        onBlur={props.onBlur}
        placeholder="00"
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
}
