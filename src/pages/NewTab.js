/*global chrome*/
import React from "react";
import "./NewTab.css";
import BgColorSelector from "../components/BgColorSelector";
import SearchBar from "../components/SearchBar";
import DateTitle from "../components/DateTitle";
import { bingURL, white } from "../constants";
import TimeTitle from "../components/TimeTitle";
import AddTaskArea from "../components/AddTaskArea";

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
    <div className="new-tab">
      <div className="new-tab-top">
        <BgColorSelector />
      </div>
      <div className="new-tab-bottom">
        <div className="new-tab-left">
          <div className="search-section">
            <div className="date-time-title">
              <DateTitle />
              <TimeTitle />
            </div>
            <SearchBar engine={currentEngine} />
          </div>
          <div className="add-task-section">
            <AddTaskArea />
          </div>
        </div>
        <div className="new-tab-right">
          <h1>right section</h1>
        </div>
      </div>
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
