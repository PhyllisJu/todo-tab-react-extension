export const task = {
  title: "attend the meeting",
  dueDate: "07/21/2022",
  dueTime: "12:30 PM",
  category: "Default Category",
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
  },
];

const codingTasks = [
  {
    title: "LeetCode Practice",
    dueDate: "07/21/2022",
    dueTime: "12:30 PM",
    category: "Learn about Coding",
  },
  {
    title: "Read extension documentation",
    dueDate: "07/21/2022",
    dueTime: "11:30 AM",
    category: "Learn about Coding",
  },
];

const entertainmentTasks = [
  {
    title: "Play mobile games",
    dueDate: "07/21/2022",
    dueTime: "00:00 AM",
    category: "Entertainment",
  },
];

const healthTasks = [
  {
    title: "Sleep early",
    dueDate: "07/21/2022",
    dueTime: "01:00 AM",
    category: "Health",
  },
];

export const tasks = [
  defaultTasks,
  codingTasks,
  entertainmentTasks,
  healthTasks,
];
