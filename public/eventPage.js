chrome.runtime.onStartup.addListener(function () {
    chrome.alarms.onAlarm.addListener(function (alarm) {
        chrome.notifications.create(
            `task-due-notification-${Date.now()}`,
            {
                type: "basic",
                iconUrl: chrome.runtime.getURL("favicon.ico"),
                title: alarm.name,
                message: "due in 10 minutes",
            }
        );
    })
});