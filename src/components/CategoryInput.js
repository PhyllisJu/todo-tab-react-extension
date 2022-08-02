import React from "react";
import "./CategoryInput.css";

// TODO: add a history category menu
export default function CategoryInput(props) {
  return (
    <input
      type="text"
      className="category-input"
      placeholder="Give your task a category here"
      maxLength="80"
      value={props.input}
      onChange={props.onChange}
      spellCheck="false"
    />
  );
}
