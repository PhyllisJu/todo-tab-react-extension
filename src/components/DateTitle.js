import React from "react";

export default function DateTitle() {
  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();
  const month = today.getMonth();
  console.log(month);

  const months = new Map([
    [0, "January"],
    [1, "February"],
    [2, "March"],
    [3, "April"],
    [4, "May"],
    [5, "June"],
    [6, "July"],
    [7, "August"],
    [8, "September"],
    [9, "October"],
    [10, "November"],
    [11, "December"],
  ]);

  return (
    <div>
      <h1
        style={{
          fontFamily: "'Open Sans', sans-serif",
          fontWeight: 400,
          fontSize: "32px",
        }}
      >
        {months.get(month) + " " + date + ", " + year}
      </h1>
    </div>
  );
}
