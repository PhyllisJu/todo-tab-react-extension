const storage = new Schema({
  backgroundColor: String,
  engine: String,
  tasks: [
    {
      title: String,
      dueDate: String,
      dueTime: String,
      category: String | "Default Category",
      checked: Boolean,
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
