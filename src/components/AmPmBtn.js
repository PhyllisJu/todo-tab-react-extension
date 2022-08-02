import React from "react";
import "./AmPmBtn.css";

export default function AmPmBtn(props) {
  return (
    <button onClick={props.onClick} className="am-pm-btn">
      {props.value}
    </button>
  );
}
