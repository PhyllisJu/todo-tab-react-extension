import React from "react";

export function notify() {
  // Check if the browser supports notification
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Check if the user permits to receive notification
  Notification.requestPermission().then(function (result) {
    if (result === "denied") {
      console.log("Permission wasn't granted. Allow a retry.");
      return;
    } else if (result === "default") {
      console.log("The permission request was dismissed.");
      return;
    }
    // Permit requested
    sendMesage();
  });
}

export function sendMesage(taskName, dueTime) {
  let notification = null;
  const title = taskName;
  const options = {
    dir: "auto",
    body: "Your " + taskName + "is due in " + dueTime + ".",
    data: {
      originUrl: ``, //TODO: The URL of the new tab.
    },
    requireInteraction: true,
    //   image: ,
    //   icon: ,
  };
  notification = new Notification(title, options);

  notification.onclick = ({ currentTarget: { data } }) => {
    notification.close();
    window.focus();
    window.location.href = data.originUrl;
  };
}
