const storage = new Schema({
  backgroundColor: String,
  engine: String,
  tasks: [
    {
      title: String,
      due: String | "At any time",
      category: String | "Default Category",
    },
  ],
  categories: [
    {
      title: "Default Category",
    },
    {
      title: String,
    },
  ],
});
