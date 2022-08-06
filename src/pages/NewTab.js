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
  const [bgColor, setBgColor] = React.useState("");
  // manage background color
  chrome.storage.local.get({ backgroundColor: white }
  ).then((result) => {
    console.log("The current backgroundColor is: " + result.backgroundColor);
    setBgColor(result.backgroundColor);
  });
  // manage search engine
  chrome.storage.local.get({ engine: bingURL }
  ).then((result) => {
    console.log("The current engine is: " + result.engine);
    setCurrentEngine(result.engine);
  });

  console.log("The current engine is (NewTab): " + currentEngine);

  return (
    <div className="new-tab" style={{
      backgroundColor: bgColor,
    }}>
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
