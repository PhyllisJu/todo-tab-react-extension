/* global chrome */
import React from "react";
import "./AmPmBtn.css";
import TaskInput from "./TaskInput";
import CalendarInput from "./CalendarInput";
import CategoryInput from "./CategoryInput";
import TimeInput from "./TimeInput";
import AmPmBtn from "./AmPmBtn";

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

      // get current tasks
      // TODO: generate a random color code and assign it to newTask (property: "color")
      const newTask = {
        title: taskInput,
        dueDate: dateInput ? dateInput : "",
        dueTime: dueTime,
        category: categoryTitle,
      };
      let currentTasks = [];
      chrome.storage.local.get({ tasks: [] }).then((result) => {
        // add new task to tasks array
        chrome.storage.local
          .set({ tasks: [...result.tasks, newTask] })
          .then(() => console.log("Task added"));
      });

      // get current categories
      let currentCategories = [];
      chrome.storage.local
        .get({ categories: ["Default Category"] })
        .then((result) => {
          currentCategories = [...result.categories];
          // add the new category if it doesn't exist
          if (!currentCategories.includes(categoryTitle)) {
            chrome.storage.local
              .set({
                categories: [...currentCategories, categoryTitle],
              })
              .then(() => console.log("Category added"));
          }
        });
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
    .get({ categories: ["Default Category"] })
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
  color: "black",
  margin: "15px 0px 10px 0px",
};
