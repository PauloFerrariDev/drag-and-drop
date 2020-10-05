const initialData = {
  tasks: [
    { id: "task-1", content: "Take out the garbage" },
    { id: "task-2", content: "Watch my favorite show" },
    { id: "task-3", content: "Charge my phone" },
    { id: "task-4", content: "Cook dinner" },
    { id: "task-5", content: "Code DnD" },
    { id: "task-6", content: "Read TS doc" },
    { id: "task-7", content: "Review PRs" },
    { id: "task-8", content: "Bear the boss" },
  ],
  columns: [
    {
      id: "column-1",
      title: "Home",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    {
      id: "column-2",
      title: "Work",
      taskIds: ["task-5", "task-6", "task-7", "task-8"],
    },
  ],
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2"],
};

export default initialData;
