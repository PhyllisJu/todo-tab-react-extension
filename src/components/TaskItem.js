/* global chrome */
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function TaskItem(props) {
  const [checked, setChecked] = React.useState(props.task.checked);

  React.useEffect(() => {
    setChecked(props.task.checked);
  }, [props]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    // the value parameter is stored in event.target.defaultValue
    checkTask(props.index, props.task.category, event.target.checked);
  };

  const handleDelete = () => {
    let category = props.task.category;
    let taskIdx = props.index

    chrome.storage.local.get("boards").then((result) => {
      let boards = result.boards;
      let boardIdx = boards.findIndex((board) => board.category === category);
      // if the task to be deleted is the only task in the board, delete the board
      if (boards[boardIdx].tasks.length === 1) {
        console.log("deleting board");

        boards.splice(boardIdx, 1);
        // fetch categories from storage and remove the category
        chrome.storage.local
          .get("categories")
          .then((result) => {
            let categories = result.categories;
            let categoryIdx = categories.findIndex(
              (entry) => entry.title === category
            );
            categories.splice(categoryIdx, 1);

            console.log("categories" + categories);
            chrome.storage.local
              .set({ categories: categories, boards: boards })
              .then(console.log("set category successfully"))
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      } else {
        // remove the task from the storage
        boards[boardIdx].tasks.splice(taskIdx, 1);
        chrome.storage.local
          .set({ boards: boards })
          .then(console.log("delete task successfully"))
          .catch((err) => console.log(err));
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        fontSize: "16px",
        fontWeight: 400,
        margin: "5px 0",
      }}
    >
      <div
        style={{
          cursor: "pointer",
          width: "70%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox
          sx={{
            margin: 0,
            padding: 0,
            fontSize: "16px",
            color: "#A7B4AF",
            "&.Mui-checked": {
              color: "#A7B4AF",
            },
          }}
          checked={checked}
          onChange={handleChange}
          value={props.task.title}
          disableRipple
        />
        <label
          style={{
            marginLeft: "10px",
            color: "#111111",
            width: "95%",
            overflowWrap: "break-word",
          }}
        >
          {props.task.title}
        </label>
      </div>

      <div
        style={{
          width: "24%",
          display: "flex",
          justifyContent: "center",
          color: "#111111",
        }}
      >
        <span>{props.task.dueDate}</span>
        <span style={{ marginLeft: "10px" }}>{props.task.dueTime}</span>
      </div>

      <div
        style={{
          width: "6%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <DeleteIcon
          sx={{
            fill: "#A7B4AF",
            cursor: "pointer",
          }}
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}

// helper function
// TODO: change taskTitle to taskId
function checkTask(taskIdx, taskCategory, checkedState) {
  console.log(taskIdx)
  chrome.storage.local.get("boards").then((result) => {
    let boards = result.boards;
    let boardIdx = boards.findIndex((board) => board.category === taskCategory);
    boards[boardIdx].tasks[taskIdx].checked = checkedState;
    chrome.storage.local
      .set({ boards: boards })
      .then(console.log("set task checked state successfully"))
      .catch((err) => console.log(err));
  });
}
