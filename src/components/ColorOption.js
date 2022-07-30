import React from "react";

export default function ColorOption(props) {
  return (
    <div
      style={{
        width: "25px",
        height: "25px",
        borderRadius: "100%",
        cursor: "pointer",
        transition: "box-shadow 0.2s ease-in-out",
        // "&:hover": {
        //   boxShadow: "0px 0px 10px 2px #c0c1c0",
        // },
        backgroundColor: props.color,
        border: "2px solid #c8c8c8",
      }}
      onClick={() => props.handleColorClick(props.color)}
    ></div>
  );
}
