/* global chrome */
import React from "react";
import TaskBoards from "./TaskBoards";

// TODO: add a progress bar?
export default function TaskArea() {
  let boards = [];
  chrome.storage.local
    .get({ boards: [], categories: [] })
    .then((result) => {
      for (let board of result.boards) {
        // find category according to task.category
        let category = result.categories.find((entry) => {
          return entry.title === board.category;
        });
        boards.push({ tasks: board.tasks, category: category });
      }
    })
    .catch((err) => console.log(err));

  return (
    <div
      style={{
        width: "99%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TaskBoards boards={boards} />
    </div>
  );
}
