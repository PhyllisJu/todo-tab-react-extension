import React from "react";

export default function TimeTitle() {
  const [timeStr, setTimeStr] = React.useState(generateTimeStr());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeStr(generateTimeStr());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div>
      <h1
        style={{
          fontSize: "32px",
          fontWeight: 400,
        }}
      >
        {timeStr}
      </h1>
    </div>
  );
}

// helper function
function generateTimeStr() {
  const today = new Date();
  let minute = today.getMinutes();
  let hour = today.getHours();
  let suffix = "AM";

  // format
  if (hour > 12) {
    hour = hour - 12;
    suffix = "PM";
  } else if (hour < 12) {
    suffix = "AM";
  } else {
    suffix = "PM";
  }

  if (minute <= 9) {
    minute = "0" + minute;
  }
  return hour + ":" + minute + " " + suffix;
}
