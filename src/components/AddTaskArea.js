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

  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
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
    // TODO: the above line of code checks whether the user pastes an invalid charater
    // It should be written in a event handler of "input" event
    if (e.target.name === "hour") {
      if (input > 12 || input < 0) return;
      setHourInput(input);
    } else {
      if (input > 59 || input < 0) return;
      setMinuteInput(input);
    }
  };
    
  const handleTimePaste = (e) => {
    e.preventDefault()
  };

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

  const invalidChars = ["-", "+", "e", "."];
  const handleTimeKeyDown = (e) => {
    if (invalidChars.includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
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
        <CategoryInput input={categoryInput} onChange={handleCategoryInput} />
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <button
          className="am-pm-btn"
          style={{ width: "150px", marginTop: "15px" }}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

const labelStyle = {
  fontSize: "20px",
  fontWeight: 400,
  color: "black",
  margin: "15px 0px 10px 0px",
};
