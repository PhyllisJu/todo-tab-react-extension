/* global chrome */
import React from "react";
import "./AmPmBtn.css";
import TaskInput from "./TaskInput";
import CalendarInput from "./CalendarInput";
import CategoryInput from "./CategoryInput";
import TimeInput from "./TimeInput";
import AmPmBtn from "./AmPmBtn";
import { randomColors } from "../constants";

// TODO: only allow 'AM' when hour is '00' and 'PM' when hour is '12'
export default function AddTaskArea() {
  const [taskInput, setTaskInput] = React.useState("");
  const [categoryInput, setCategoryInput] = React.useState("");
  const [dateInput, setDateInput] = React.useState("");
  const [hourInput, setHourInput] = React.useState("");
  const [minuteInput, setMinuteInput] = React.useState("");
  const [amPm, setAmPm] = React.useState("AM");
  const [categoryList, setCategoryList] = React.useState([]);

  // handle adding a task
  const handleSubmit = () => {
    if (taskInput) {
      // process inputs
      let dueTime = "";
      let categoryTitle = "Default Category";
      if (hourInput && minuteInput) {
        dueTime = hourInput + ":" + minuteInput + " " + amPm;
      }
      if (categoryInput) {
        categoryTitle = categoryInput;
      }

      addCategory(categoryTitle);
      addTask(taskInput, dateInput, dueTime, categoryTitle);
    } else {
      console.log("you must provide a task title");
    }
  };

  // handle input methods
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
  };
  const handleCategorySelect = (e) => {
    setCategoryInput(e.target.innerText);
  };
  const handleDateInput = (e) => {
    setDateInput(e.target.value);
  };
  const handleAmPm = () => {
    if (amPm === "AM") {
      setAmPm("PM");
    } else {
      setAmPm("AM");
    }
  };
  const handleTimeInput = (e) => {
    let input = e.target.value.toString();
    if (e.target.name === "hour") {
      if (input > 12 || input < 0) return;
      setHourInput(input);
    } else {
      if (input > 59 || input < 0) return;
      setMinuteInput(input);
    }
  };

  // prevent users from pasting invalid chars into time input
  const invalidChars = ["-", "+", "e", "."];
  const handleTimeKeyDown = (e) => {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };
  const handleTimePaste = (e) => {
    e.preventDefault();
  };

  // format the time input when the input loses focus
  const handleTimeBlur = (e) => {
    if (e.target.name === "hour") {
      if (hourInput.length === 1) {
        setHourInput("0" + hourInput);
      }
      if (hourInput.length > 2) {
        setHourInput(hourInput.slice(1));
      }
    } else {
      if (minuteInput.length === 1) {
        setMinuteInput("0" + minuteInput);
      }
      if (minuteInput.length > 2) {
        setMinuteInput(minuteInput.slice(1));
      }
    }
  };

  // get the current category list
  chrome.storage.local
    .get({
      categories: [
        {
          title: "Default Category",
          color: "#FD9271",
        },
      ],
    })
    .then((result) => {
      setCategoryList(result.categories);
    });

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <label style={labelStyle}>Task *</label>
      <div className="task-input-area">
        <TaskInput input={taskInput} onChange={handleTaskInput} />
      </div>
      <label style={labelStyle}>Due Time</label>
      <div
        className="due-input-area"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CalendarInput input={dateInput} onChange={handleDateInput} />
        <TimeInput
          hour={hourInput}
          minute={minuteInput}
          onChange={handleTimeInput}
          onPaste={handleTimePaste}
          onBlur={handleTimeBlur}
          onKeyDown={handleTimeKeyDown}
        />
        <AmPmBtn value={amPm} onClick={handleAmPm} />
      </div>
      <label style={labelStyle}>Category</label>
      <div className="category-input-area">
        <CategoryInput
          input={categoryInput}
          onChange={handleCategoryInput}
          categoryList={categoryList}
          handleCategorySelect={handleCategorySelect}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          className="am-pm-btn"
          type="submit"
          style={{ width: "150px", marginTop: "15px" }}
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

const labelStyle = {
  fontSize: "20px",
  fontWeight: 400,
  margin: "15px 0px 10px 0px",
};

// helper function
// generate a random color code
function generateRandomColor() {
  const total = randomColors.length;
  const randomIndex = Math.floor(Math.random() * 100000000);
  return randomColors[randomIndex % total];
}

// helper function
// add a new task
function addTask(taskInput, dateInput, dueTime, categoryTitle) {
  // get current tasks
  const newTask = {
    title: taskInput,
    dueDate: dateInput ? dateInput : "",
    dueTime: dueTime,
    category: categoryTitle,
    checked: false,
  };
  chrome.storage.local.get({ boards: [] }).then((result) => {
    // find the category index and add the new task to the category
    let boards = result.boards;
    let categoryIndex = boards.findIndex((entry) => {
      return entry.category === categoryTitle;
    });

    // if category doesn't exist, add it to the list
    let categoryExists = categoryIndex !== -1;
    if (!categoryExists) {
      boards.push({
        category: categoryTitle,
        tasks: [newTask],
      });
    } else {
      // if category exists, add the new task to the category
      boards[categoryIndex].tasks.push(newTask);
    }

    chrome.storage.local.set({ boards: boards }).then(() => console.log("Task added"));

  }).catch((err) => console.log(err));

}

// helper function
// add a new category
function addCategory(categoryTitle) {
  // generate a random color code
  const randomColor = generateRandomColor();
  // create a new category
  const newCategory = {
    title: categoryTitle,
    color: randomColor,
  };
  // get current categories
  chrome.storage.local
    .get({
      categories: [],
    })
    .then((result) => {
      // check if the new category is unique
      let isUnique = true;
      for (let category of result.categories) {
        if (category.title === categoryTitle) {
          isUnique = false;
          break;
        }
      }
      if (isUnique) {
        // add the new category if it doesn't exist
        chrome.storage.local
          .set({
            categories: [...result.categories, newCategory],
          })
          .then(() => console.log("Category added"));
      }
    });
}
