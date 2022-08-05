/* global chrome */
import React from "react";
import "./CategoryInput.css";

// TODO: add a history category menu
export default function CategoryInput(props) {
  const [categoryList, setCategoryList] = React.useState([]);
  chrome.storage.local.get(
    { categories: ["Default Category"] },
    function (result) {
      setCategoryList(result.categories);
    }
  );
  return (
    <div>
      <input
        type="text"
        className="category-input"
        placeholder="Give your task a category here"
        maxLength="80"
        value={props.input}
        onChange={props.onChange}
        spellCheck="false"
      />
      <ul>
        {categoryList.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
