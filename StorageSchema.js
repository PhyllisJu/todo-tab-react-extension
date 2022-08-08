const storage = new Schema({
  backgroundColor: String,
  engine: String,
  tasks: [
    {
      title: String,
      dueDate: String,
      dueTime: String,
      category: String | "Default Category",
    },
  ],
  categories: [
    {
      title: "Default Category",
      color: "#FD9271",
    },
    { title: String, color: String },
  ],
});
