export const task = {
  title: "attend the meeting",
  dueDate: "07/21/2022",
  dueTime: "12:30 PM",
  category: "Default Category",
  checked: true,
};

export const category = {
  title: "Default Category",
  color: "#FD9271",
};

export const categories = [
  category,
  {
    title: "Learn about Coding",
    color: "#FBBC05",
  },
  {
    title: "Entertainment",
    color: "#4285F4",
  },
  {
    title: "Health",
    color: "#34A853",
  },
];

const defaultTasks = [
  task,
  {
    title: "take a shower",
    dueDate: "",
    dueTime: "",
    category: "Default Category",
    checked: false,
  },
  {
    title: "take a nap",
    dueDate: "",
    dueTime: "",
    category: "Default Category",
    checked: false,
  },
];

const codingTasks = [
  {
    title: "LeetCode Practice",
    dueDate: "07/21/2022",
    dueTime: "12:30 PM",
    category: "Learn about Coding",
    checked: true,
  },
  {
    title: "Read extension documentation",
    dueDate: "07/21/2022",
    dueTime: "11:30 AM",
    category: "Learn about Coding",
    checked: false,
  },
  {
    title: "FreeCodeCamp Practice",
    dueDate: "07/21/2022",
    dueTime: "02:30 PM",
    category: "Learn about Coding",
    checked: true,
  },
  {
    title: "Project Front-end",
    dueDate: "07/21/2022",
    dueTime: "11:30 AM",
    category: "Learn about Coding",
    checked: true,
  },
  {
    title: "Make a Pull Request",
    dueDate: "07/21/2022",
    dueTime: "11:30 AM",
    category: "Learn about Coding",
    checked: true,
  },
  {
    title: "Make another Pull Request",
    dueDate: "07/21/2022",
    dueTime: "11:30 AM",
    category: "Learn about Coding",
    checked: false,
  },
];

const entertainmentTasks = [
  {
    title: "Play mobile games",
    dueDate: "07/21/2022",
    dueTime: "00:00 AM",
    category: "Entertainment",
    checked: true,
  },
  {
    title: "Watch a film",
    dueDate: "07/21/2022",
    dueTime: "00:00 AM",
    category: "Entertainment",
    checked: false,
  },
  {
    title: "Practice guitar",
    dueDate: "07/21/2022",
    dueTime: "00:00 AM",
    category: "Entertainment",
    checked: true,
  },
  {
    title: "Record a music video",
    dueDate: "07/21/2022",
    dueTime: "00:00 AM",
    category: "Entertainment",
    checked: false,
  },
];

const healthTasks = [
  {
    title: "Sleep late",
    dueDate: "07/21/2022",
    dueTime: "01:00 AM",
    category: "Health",
    checked: true,
  },
  {
    title: "Go to Arc",
    dueDate: "07/21/2022",
    dueTime: "01:00 AM",
    category: "Health",
    checked: false,
  },
  {
    title: "Go to Arc",
    dueDate: "07/21/2022",
    dueTime: "01:00 AM",
    category: "Health",
    checked: false,
  },
];

export const tasks = [
  defaultTasks,
  codingTasks,
  entertainmentTasks,
  healthTasks,
];
