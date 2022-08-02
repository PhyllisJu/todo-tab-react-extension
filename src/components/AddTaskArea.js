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
  const [hourInput, setHourInput] = React.useState("08");
  const [minuteInput, setMinuteInput] = React.useState("00");
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
    let input = "";
    if (e.target.value < 10) {
      input = "0" + e.target.value;
    } else {
      input = e.target.value;
    }
    if (e.target.name === "hour") {
      setHourInput(input);
    } else {
      setMinuteInput(input);
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
