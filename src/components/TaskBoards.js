/* global chrome */
import { PhotoCameraBackRounded } from "@mui/icons-material";
import React from "react";
import TaskBoard from "./TaskBoard";
import { ReactComponent as EmptyTask } from "../icons/emptytask.svg";

export default function TaskBoards(props) {
  const [boards, setBoards] = React.useState(props.boards);

  // add chrome listener to boards
  chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "local" && "tasks" in changes) {
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
    }
  });

  return boards.length === 0 ? (
    <div
      style={{
        // position: "absolute",
        // top: "30%",
        // left: "60%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "15vw",
      }}
    >
      <EmptyTask />
      <div style={{ fontWeight: 400, fontSize: "26px", color: "#111111" }}>
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

// let storedTasks = [];
// chrome.storage.local.get({ tasks: tasks }).then((result) => {
//   // copy result to storedTasks
//   storedTasks = result.tasks;
//   console.log(storedTasks);
// }).catch((err) => console.log(err));

// // loop through the stored tasks and generate task boards for each category
// let taskBoards = [];
// for (let category of storedTasks) {
//   console.log(category);

//   taskBoards.push(
//     <TaskBoard
//       key={category.category}
//       category={category.category}
//       tasks={category.tasks}
//     />
//   );
// }

// console.log("taskBoards: ", taskBoards);
// // TODO: when there are no tasks, display a message

// return (
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "column",
//       width: "100%",
//       margin: "10px 0px",
//     }}
//   >
//     {taskBoards}
//   </div>
// );
// }
