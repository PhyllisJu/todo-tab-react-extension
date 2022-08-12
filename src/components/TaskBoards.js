/* global chrome */
import { PhotoCameraBackRounded } from "@mui/icons-material";
import React from "react";
import TaskBoard from "./TaskBoard";
import { ReactComponent as EmptyTask } from "../icons/emptytask.svg";

export default function TaskBoards(props) {
  const [boards, setBoards] = React.useState(props.boards);

  // add chrome listener to boards
  chrome.storage.onChanged.addListener((changes, areaName) => {
    console.log("TaskBoards" + changes + ";" + areaName);
    chrome.storage.local
      .get({ boards: [], categories: [] })
      .then((result) => {
        let newBoards = [];
        for (let board of result.boards) {
          // find category according to task.category
          let category = result.categories.find((entry) => {
            return entry.title === board.category;
          });
          newBoards.push({ tasks: board.tasks, category: category });
        }
        console.log("newBoards ", JSON.stringify(newBoards));
        setBoards(newBoards);
      })
      .catch((err) => console.log(err));
  });

  return boards.length === 0 ? (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "13vw",
      }}
    >
      <EmptyTask />
      <div
        style={{
          fontWeight: 400,
          fontSize: "26px",
          color: "#111111",
          margin: "15px",
        }}
      >
        Add some tasks to begin your journey!
      </div>
    </div>
  ) : (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {boards.map((board, index) => (
        <TaskBoard category={board.category} tasks={board.tasks} key={index} />
      ))}
    </div>
  );
}
