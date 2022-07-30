/*global chrome*/
import React from "react";
import BgColorSelector from "../components/BgColorSelector";
import SearchBar from "../components/SearchBar";
import { white } from "../constants";

export default function NewTab() {
  chrome.storage.local.get("backgroundColor", function (result) {
    if (result.backgroundColor) {
      // there is already a background color in the storage
      console.log("The current backgroundColor is: " + result.backgroundColor);
    } else {
      // there isn't a color in the storage
      // set it to default white
      setDefaultBgColor();
    }
  });

  return (
    <div
      style={{
        backgroundColor: white,
        width: "100%",
        height: "100vh",
      }}
    >
      {/* <BgColorSelector /> */}
      <SearchBar />
    </div>
  );
}

// helper functions
function setDefaultBgColor() {
  chrome.storage.local.set(
    {
      backgroundColor: white,
    },
    () =>
      console.log(
        "successfully update default backgroundColor in the storage: " + white
      )
  );
}
