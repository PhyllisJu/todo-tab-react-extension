import React from "react";

export default function DateTitle() {
  const [dateStr, setDateStr] = React.useState(generateDateStr());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDateStr(generateDateStr());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 400,
          color: "#111111",
        }}
      >
        {dateStr}
      </h1>
    </div>
  );
}

// helper function
function generateDateStr() {
  const today = new Date();
  const date = today.getDate();
  const year = today.getFullYear();
  const month = today.getMonth();

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

  return months.get(month) + " " + date + ", " + year;
}
