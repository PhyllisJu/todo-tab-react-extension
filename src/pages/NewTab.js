/*global chrome*/
import React from "react";
import BgColorSelector from "../components/BgColorSelector";
import SearchBar from "../components/SearchBar";
import DateTitle from "../components/DateTitle";
import { bingURL, white } from "../constants";
import TimeTitle from "../components/TimeTitle";
import CalendarInput from "../components/CalendarInput";

export default function NewTab() {
  // TODO: bug: the selected value of SearchBar component is always the initial value of currentEngine
  const [currentEngine, setCurrentEngine] = React.useState("");
  // manage background color
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

  // manage search engine
  chrome.storage.local.get("engine", function (result) {
    if (result.engine) {
      console.log("The current engine is: " + result.engine);
      setCurrentEngine(result.engine);
    } else {
      setDefaultEngine();
      setCurrentEngine(bingURL);
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
      <DateTitle />
      <TimeTitle />
      <SearchBar engine={currentEngine} />
      <CalendarInput />
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

function setDefaultEngine() {
  chrome.storage.local.set(
    {
      engine: bingURL,
    },
    () =>
      console.log(
        "successfully update default engine in the storage: " + bingURL
      )
  );
}
