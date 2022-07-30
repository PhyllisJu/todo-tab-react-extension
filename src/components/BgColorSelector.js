// BgColorSelector.js
/*global chrome*/

import React from "react";
import ColorOption from "./ColorOption";
import { white, green, yellow, pink, blue, black } from "../constants";

export default function BgColorSelector() {
  function handleColorClick(color) {
    chrome.storage.local.set(
      {
        backgroundColor: color,
      },
      () =>
        console.log(
          "successfully update backgroundColor in the storage: " + color
        )
    );
  }

  return (
    <div
      style={{
        display: "flex",
        width: "250px",
        justifyContent: "space-between",
      }}
    >
      <ColorOption color={white} handleColorClick={handleColorClick} />
      <ColorOption color={green} handleColorClick={handleColorClick} />
      <ColorOption color={yellow} handleColorClick={handleColorClick} />
      <ColorOption color={pink} handleColorClick={handleColorClick} />
      <ColorOption color={blue} handleColorClick={handleColorClick} />
      <ColorOption color={black} handleColorClick={handleColorClick} />
    </div>
  );
}
