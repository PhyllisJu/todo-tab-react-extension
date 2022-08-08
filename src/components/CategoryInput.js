/* global chrome */
import React, { useEffect, useRef } from "react";
import "./CategoryInput.css";

export default function CategoryInput(props) {
  const [menuState, setMenuState] = React.useState("hidden");
  const menuRef = useRef(null);
  function useOutsideHidden(ref) {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setMenuState("hidden");
        }
      }
      // bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideHidden(menuRef);

  const handleFocus = () => {
    setMenuState("");
  };

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
        onFocus={handleFocus}
      />
      {props.categoryList.length === 1 &&
      props.categoryList[0].title === "Default Category" ? (
        <></>
      ) : (
        <ul className={`category-input-menu ${menuState}`} ref={menuRef}>
          {props.categoryList.map((category, index) => {
            if (category.title !== "Default Category") {
              return (
                <li
                  key={index}
                  value={category.title}
                  onClick={props.handleCategorySelect}
                >
                  {category.title}
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
}
