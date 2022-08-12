import React from "react";

export default function SmallProgressBar(props) {
  const [progress, setProgress] = React.useState(
    (props.completed / props.total) * 100
  );

  React.useEffect(
    () => setProgress((props.completed / props.total) * 100),
    [props]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="small-progress-bar"
        style={{
          backgroundColor: "#ffffff",
          border: "2px solid #e8e8e8",
          borderRadius: "20px",
          height: "12px",
          width: "8vw",
          minWidth: "80px",
          maxWidth: "100%",
        }}
      >
        <div
          dataSize={props.progress}
          className="small-progress"
          style={{
            backgroundColor: props.color,
            borderRadius: "20px",
            height: "8px",
            width: `${progress}%`,
            transition: "width 0.5s ease-in",
          }}
        ></div>
      </div>
      <span
        style={{
          fontWeight: 400,
          fontSize: "16px",
          color: "#111111",
          marginLeft: "10px",
        }}
      >
        {props.completed + " / " + props.total}
      </span>
    </div>
  );
}
